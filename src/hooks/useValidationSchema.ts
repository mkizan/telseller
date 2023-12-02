import { useMemo } from "react";
import { AnyZodObject, ZodError, ZodType } from "zod";

interface ValidationSchema<T extends AnyZodObject> {
  validationSchema: ZodType<unknown>;
  validateData: (data: T) => ZodError | null;
}

const useValidationSchema = <T extends AnyZodObject>(
  initialSchema: T
): ValidationSchema<T> => {
  const validationSchema = useMemo(() => initialSchema, [initialSchema]);

  const validateData = (data: unknown): ZodError | null => {
    try {
      validationSchema.parse(data);
      return null;
    } catch (error) {
      return error as ZodError;
    }
  };

  return {
    validationSchema,
    validateData,
  };
};

export default useValidationSchema;
