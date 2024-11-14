import { z as w } from "zod";
import i18n from "../i18n";

const addCustomerFormSchema = w.object({
  firstName: w
    .string()
    .min(
      2,
      i18n.t("ns:error.message.minLength", {
        fieldName: i18n.t("ns:field.firstName"),
        minLength: 2,
      })
    )
    .max(
      20,
      i18n.t("ns:error.message.maxLength", {
        fieldName: i18n.t("ns:field.firstName"),
        maxLength: 20,
      })
    ),
  lastName: w
    .string()
    .min(
      2,
      i18n.t("ns:error.message.minLength", {
        fieldName: i18n.t("ns:field.lastName"),
        minLength: 2,
      })
    )
    .max(
      25,
      i18n.t("ns:error.message.maxLength", {
        fieldName: i18n.t("ns:field.lastName"),
        maxLength: 25,
      })
    ),
  code: w.coerce
    .number()
    .min(
      999999999,
      i18n.t("ns:error.message.minLength", {
        fieldName: i18n.t("ns:field.code"),
        minLength: 10,
      })
    )
    .max(
      9999999999,
      i18n.t("ns:error.message.maxLength", {
        fieldName: i18n.t("ns:field.code"),
        maxLength: 10,
      })
    )
    .optional(),
  organization: w
    .string()
    .min(
      2,
      i18n.t("ns:error.message.minLength", {
        fieldName: i18n.t("ns:field.organization"),
        minLength: 2,
      })
    )
    .max(
      50,
      i18n.t("ns:error.message.maxLength", {
        fieldName: i18n.t("ns:field.organization"),
        maxLength: 50,
      })
    )
    .optional(),
  contract: w
    .string()
    .min(
      2,
      i18n.t("ns:error.message.minLength", {
        fieldName: i18n.t("ns:field.contract"),
        minLength: 2,
      })
    )
    .max(
      30,
      i18n.t("ns:error.message.maxLength", {
        fieldName: i18n.t("ns:field.contract"),
        maxLength: 30,
      })
    ),
  debt: w.coerce
    .number()
    .min(
      0,
      i18n.t("ns:error.message.minLength", {
        fieldName: i18n.t("ns:field.debt"),
        minLength: 1,
      })
    )
    .max(
      2000,
      i18n.t("ns:error.message.maxLength", {
        fieldName: i18n.t("ns:field.debt"),
        maxLength: 7,
      })
    ),
  city: w.string().min(
    4,
    i18n.t("ns:error.message.minLength", {
      fieldName: i18n.t("ns:field.city"),
      minLength: 4,
    })
  ),
  street: w.string().optional(),
  build: w.coerce.number().optional(),
  personalPhone: w
    .string()
    .min(
      19,
      i18n.t("ns:error.message.minLength", {
        fieldName: i18n.t("ns:field.personalPhone"),
        minLength: 19,
      })
    )
    .max(
      19,
      i18n.t("ns:error.message.maxLength", {
        fieldName: i18n.t("ns:field.personalPhone"),
        minLength: 19,
      })
    ),
  workPhone: w
    .string()
    .min(
      19,
      i18n.t("ns:error.message.minLength", {
        fieldName: i18n.t("ns:field.workPhone"),
        minLength: 19,
      })
    )
    .max(
      19,
      i18n.t("ns:error.message.maxLength", {
        fieldName: i18n.t("ns:field.workPhone"),
        minLength: 19,
      })
    )
    .optional(),
  comment: w.string().max(
    200,
    i18n.t("ns:error.message.maxLength", {
      fieldName: i18n.t("ns:field.comment"),
      minLength: 200,
    })
  ),
});

export default addCustomerFormSchema;
