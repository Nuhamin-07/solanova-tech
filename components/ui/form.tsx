"use client";

import * as React from "react";
import {
    Controller,
    FormProvider,
    useFormContext,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
} from "react-hook-form";

const Form = FormProvider;

type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = { name: TName };

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

function FormField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: ControllerProps<TFieldValues, TName>) {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
}

type FormItemContextValue = { id: string };
const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

function FormItem({ className = "", ...props }: React.ComponentProps<"div">) {
    const id = React.useId();
    return (
        <FormItemContext.Provider value={{ id }}>
            <div className={className} {...props} />
        </FormItemContext.Provider>
    );
}

function useFormField() {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();

    if (!fieldContext.name) throw new Error("FormField components must be nested inside FormField.");
    if (!itemContext.id) throw new Error("FormField components must be nested inside FormItem.");

    const fieldState = getFieldState(fieldContext.name, formState);
    return {
        id: itemContext.id,
        name: fieldContext.name,
        formItemId: `${itemContext.id}-form-item`,
        formDescriptionId: `${itemContext.id}-form-item-description`,
        formMessageId: `${itemContext.id}-form-item-message`,
        ...fieldState,
    };
}

function FormLabel({ className = "", ...props }: React.ComponentProps<"label">) {
    const { error, formItemId } = useFormField();
    return (
        <label
            htmlFor={formItemId}
            data-invalid={Boolean(error)}
            className={`text-sm font-semibold text-slate-800 data-[invalid=true]:text-red-700 ${className}`}
            {...props}
        />
    );
}

function FormControl({ children }: { children: React.ReactElement }) {
    const { error, formItemId, formMessageId } = useFormField();
    const describedBy = error ? formMessageId : undefined;
    const child = children as React.ReactElement<Record<string, unknown>>;

    return React.cloneElement(child, {
        id: (child.props.id as string | undefined) ?? formItemId,
        "aria-describedby": describedBy,
        "aria-invalid": Boolean(error),
    });
}

function FormDescription({ className = "", ...props }: React.ComponentProps<"p">) {
    const { formDescriptionId } = useFormField();
    return <p id={formDescriptionId} className={`text-sm text-slate-500 ${className}`} {...props} />;
}

function FormMessage({ className = "", children, ...props }: React.ComponentProps<"p">) {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error.message ?? "") : children;
    if (!body) return null;

    return (
        <p id={formMessageId} role={error ? "alert" : undefined} className={`text-sm text-red-600 ${className}`} {...props}>
            {body}
        </p>
    );
}

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField };
