import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormMask } from "use-mask-input";
import addCustomerFormSchema from "../../schemas/addCustomerFormSchema";
import useValidationSchema from "../../hooks/useValidationSchema";
import {
  TCustomerData,
  useAddCustomerMutation,
} from "../../redux/api/customersApi";

const CustomerForm = () => {
  const { t } = useTranslation();
  const { validationSchema } = useValidationSchema(addCustomerFormSchema);

  const [addCustomer] = useAddCustomerMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCustomerData>({
    resolver: zodResolver(validationSchema),
  });

  const registerWithMask = useHookFormMask(register);

  const onSubmit = (data: TCustomerData) => {
    addCustomer(data);
    reset();
    console.log(data);
  };

  return (
    <>
      <Link
        to="../customers"
        className="inline-block px-3 py-2 font-bold border mb-2"
      >
        {t("ns:text.navigation.back")}
      </Link>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-3">
        <label htmlFor="firstName" className="field-required">
          {t("ns:field.firstName")}
        </label>
        <input
          {...register("firstName", { required: true })}
          // {...register("firstName", {
          //   required: true,
          //   minLength: 3,
          //   maxLength: 15,
          // })}
          // name="firstName"
          type="text"
          id="firstName"
          autoComplete="off"
          placeholder={t("ns:field.placeholders.firstName")}
          className="block focus:outline-accent hover:outline-second py-1 px-2"
        />
        {errors.firstName && (
          <span className="block text-required first-letter:capitalize">
            {errors.firstName.message}
            {/* {t(`ns:error.message.${errors.firstName.type}`, {
              fieldName: t("ns:field.firstName"),
              minLength: 3,
              maxLength: 15,
            })} */}
          </span>
        )}

        <label htmlFor="lastName" className="field-required">
          {t("ns:field.lastName")}
        </label>
        <input
          {...register("lastName", { required: true })}
          type="text"
          id="lastName"
          autoComplete="off"
          placeholder={t("ns:field.placeholders.lastName")}
          className="block focus:outline-accent hover:outline-second py-1 px-2"
        />
        {errors.lastName && (
          <span className="block text-required first-letter:capitalize">
            {errors.lastName.message}
          </span>
        )}

        <label htmlFor="code" className="first-letter:capitalize">
          {t("ns:field.code")}
        </label>
        <input
          {...register("code", { required: false })}
          type="number"
          id="code"
          placeholder="1234567890"
        />
        {errors.code && (
          <span className="block text-required first-letter:capitalize">
            {errors.code.message}
          </span>
        )}

        {/* <label htmlFor="">Група контрагента</label>
        <select name="" id="">
          <option value="">{}</option>
        </select> */}

        <label htmlFor="organization">{t("ns:field.organization")}</label>
        <input
          {...register("organization", { required: false })}
          type="text"
          id="organization"
        />
        {/* <select
          {...register("organization", { required: false })}
          id="organization"
        >
          { {organizations.map((org) => (
            <option key={org.id}>{org.title}</option>
          ))}}
        </select> */}
        {errors.organization && (
          <span className="block text-required first-letter:capitalize">
            {errors.organization.message}
          </span>
        )}

        <label htmlFor="contract" className="field-required">
          {t("ns:field.contract")}
        </label>
        <input
          {...register("contract", { required: false })}
          type="text"
          id="contract"
          placeholder={t("ns:field.placeholders.contract")}
        />
        {errors.contract && (
          <span className="block text-required first-letter:capitalize">
            {errors.contract.message}
          </span>
        )}

        <label htmlFor="debt" className="field-required">
          {t("ns:field.debt")}
        </label>
        <input
          {...register("debt", { required: true })}
          type="number"
          id="debt"
          placeholder="2039.00"
        />
        {errors.debt && (
          <span className="block text-required first-letter:capitalize">
            {errors.debt.message}
          </span>
        )}

        <label htmlFor="city" className="field-required">
          {t("ns:field.city")}
        </label>
        <input
          {...register("city", { required: true })}
          type="text"
          id="city"
          placeholder={t("ns:field.placeholders.city")}
        />
        {errors.city && (
          <span className="block text-required first-letter:capitalize">
            {errors.city.message}
          </span>
        )}

        <label
          htmlFor="street"
          className="field-required first-letter:capitalize"
        >
          {t("ns:field.street")}
        </label>
        <input
          {...register("street", { required: true })}
          type="text"
          id="street"
          placeholder={t("ns:field.placeholders.street")}
        />
        {errors.street && (
          <span className="block text-required first-letter:capitalize">
            {errors.street.message}
          </span>
        )}

        <label
          htmlFor="build"
          className="field-required first-letter:capitalize"
        >
          {t("ns:field.build")}
        </label>
        <input
          {...register("build", { required: true })}
          type="number"
          id="build"
          placeholder="4"
        />
        {errors.build && (
          <span className="block text-required first-letter:capitalize">
            {errors.build.message}
          </span>
        )}

        <label htmlFor="apartment" className="first-letter:capitalize">
          {t("ns:field.apartment")}
        </label>
        <input
          {...register("apartment")}
          type="number"
          id="apartment"
          placeholder="25"
        />
        {errors.apartment && (
          <span className="block text-required first-letter:capitalize">
            {errors.apartment.message}
          </span>
        )}

        <label htmlFor="personalPhone" className="field-required">
          {t("ns:field.personalPhone")}
        </label>
        <input
          {...registerWithMask("personalPhone", "+38 (999) 999-99-99", {
            required: true,
          })}
          id="personalPhone"
          type="tel"
          inputMode="numeric"
          placeholder="+38 (999) 999-99-99"
        />
        {errors.personalPhone && (
          <p className="text-required first-letter:capitalize">
            {errors.personalPhone.message}
          </p>
        )}

        <label htmlFor="workPhone" className="first-letter:capitalize">
          {t("ns:field.workPhone")}
        </label>
        <input
          {...registerWithMask("workPhone", "+38 (999) 999-99-99", {
            required: false,
          })}
          id="workPhone"
          type="tel"
          inputMode="numeric"
          placeholder="+38 (999) 999-99-99"
        />
        {errors.workPhone && (
          <p className="text-required first-letter:capitalize">
            {errors.workPhone.message}
          </p>
        )}

        <label htmlFor="comment" className="first-letter:capitalize">
          {t("ns:field.comment")}
        </label>
        <textarea
          {...register("comment")}
          id="comment"
          rows={2}
          cols={2}
          className="mb-2"
          placeholder={t("ns:field.placeholders.comment")}
        />
        {errors.comment && (
          <p className="text-required first-letter:capitalize">
            {errors.comment.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-2 text-center bg-bgPrimary text-primary rounded first-letter:capitalize"
        >
          {t("ns:button.addCustomer")}
        </button>
      </form>
    </>
  );
};

export default CustomerForm;
