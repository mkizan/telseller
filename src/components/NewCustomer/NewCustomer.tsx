import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import type { FieldValues } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addNewCustomerThunk } from "../../redux/referenceDirectories/customers/operations";
import { TCustomerData } from "../../types/CustomerData";
import { organizationsSelector } from "../../redux/referenceDirectories/organizations/organizationsSlice";
import { useEffect } from "react";
import { getOrganizationsThunk } from "../../redux/referenceDirectories/organizations/operations";

const NewCustomer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCustomerData>();

  const { organizations } = useAppSelector(organizationsSelector);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getOrganizationsThunk());
  }, [dispatch]);

  const onSubmit = (data: TCustomerData) => {
    // console.table(data);
    dispatch(addNewCustomerThunk(data));
    reset();
  };

  return (
    <>
      <Link
        to="../customers"
        className="inline-block px-3 py-2 font-bold border mb-2"
      >
        назад
      </Link>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-3">
        <label htmlFor="name">Name</label>
        <input
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 4,
              message:
                "Назва контрагента повинна містити не менше 4-х символів",
            },
            maxLength: {
              value: 35,
              message:
                "Назва контрагента повинна містити не більше 35-ти символів",
            },
          })}
          type="text"
          id="name"
          autoComplete="off"
          placeholder="Назва контрагента"
          className="block focus:outline-accent hover:outline-second py-1 px-2"
        />
        {errors.name && (
          <span className="block text-red-500">{errors.name.message}</span>
        )}
        <label htmlFor="code">Code</label>
        <input
          {...register("code", {
            minLength: {
              value: 10,
              message:
                "ІПН контрагента повинен містити не менше 10-ти символів",
            },
            maxLength: {
              value: 10,
              message:
                "ІПН контрагента повинен містити не більше 10-ти символів",
            },
          })}
          type="number"
          id="code"
          placeholder=""
        />
        {errors.code && (
          <span className="block text-red-500">{errors.code.message}</span>
        )}

        {/* <label htmlFor="">Група контрагента</label>
        <select name="" id="">
          <option value="">{}</option>
        </select> */}

        <label htmlFor="organization">Organization</label>
        <select
          {...register("organization", {
            required: "This field is required",
          })}
          id="organization"
          placeholder="Виберіть організацію"
        >
          {organizations.map((org) => (
            <option key={org.id}>{org.title}</option>
          ))}
        </select>
        {errors.code && (
          <span className="block text-red-500">{errors.code.message}</span>
        )}

        <label htmlFor="contract">Contract</label>
        <input
          {...register("contract", {
            required: "This field is required",
          })}
          type="text"
          id="contract"
          placeholder="Основний договір"
        />
        {errors.contract && (
          <span className="block text-red-500">{errors.contract.message}</span>
        )}

        <label htmlFor="debt">Заборгованість</label>
        <input
          {...register("debt", { required: "This field is required" })}
          type="number"
          id="debt"
        />
        {errors.debt && (
          <span className="block text-red-500">{errors.debt.message}</span>
        )}

        <label htmlFor="city">Address</label>
        <input {...register("city")} type="text" id="city" placeholder="City" />
        {errors.city && (
          <span className="block text-red-500">{errors.city.message}</span>
        )}

        <label htmlFor="street">Street</label>
        <input
          {...register("street")}
          type="text"
          id="street"
          placeholder="Street"
        />
        {errors.street && (
          <span className="block text-red-500">{errors.street.message}</span>
        )}

        <label htmlFor="build">Build</label>
        <input
          {...register("build")}
          type="number"
          id="build"
          placeholder="Build"
        />
        {errors.build && (
          <span className="block text-red-500">{errors.build.message}</span>
        )}

        <label htmlFor="personalPhoneNumber">Personal phone number</label>
        <input
          {...register("personalPhoneNumber", {
            required: "This field is required",
          })}
          type="number"
          id="personalPhoneNumber"
          placeholder="Personal phone number"
        />
        {errors.personalPhoneNumber && (
          <p className="text-red-500">{errors.personalPhoneNumber.message}</p>
        )}

        <label htmlFor="workPhoneNumber">Work phone number</label>
        <input
          {...register("workPhoneNumber")}
          type="number"
          placeholder="WorkPhoneNumber"
        />
        {errors.workPhoneNumber && (
          <p className="text-red-500">{errors.workPhoneNumber.message}</p>
        )}

        <label htmlFor="comment">Comment</label>
        <input
          {...register("comment", { required: false })}
          type="text"
          id="comment"
        />
        {errors.comment && (
          <p className="text-red-500">{errors.comment.message}</p>
        )}

        <button
          type="submit"
          className="w-full py-2 text-center bg-bgPrimary text-primary rounded"
        >
          Створити контрагента
        </button>
      </form>
    </>
  );
};

export default NewCustomer;
