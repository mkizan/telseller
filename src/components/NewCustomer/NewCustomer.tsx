import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
// import { useAppDispatch } from "../../redux/hooks";
// import { createNewCustomerThunk } from "../../redux/referenceDirectories/customers/operations";

const CustomersListItem = () => {
  const { register, handleSubmit, reset } = useForm();

  // const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // dispatch(createNewCustomerThunk(data))
    reset();
  };

  return (
    <>
      <button type="button" className="px-3 py-1 font-bold border mb-2">
        <Link to="../customers">назад</Link>
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: true,
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
          placeholder="Назва контрагента"
        />
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
          placeholder="Ідентифікаційний код"
        />

        {/* <label htmlFor="">Група контрагента</label>
        <select name="" id="">
          <option value="">{}</option>
        </select> */}

        <input
          {...register("organization", {
            required: "Це поле не може бути порожнім",
          })}
          type="text"
          placeholder="Основна організація"
        />
        <input
          {...register("contract", {
            required: "Це поле не може бути порожнім",
          })}
          type="text"
          placeholder="Основний договір"
        />

        <label htmlFor="debt">Заборгованість контрагента</label>
        <input
          {...register("debt", { required: true })}
          type="number"
          id="debt"
          value={0}
        />

        <label htmlFor="city">Address</label>
        <input {...register("city")} type="text" id="city" placeholder="City" />
        <input {...register("street")} type="text" placeholder="Street" />
        <input {...register("build")} type="number" placeholder="Build" />

        <label htmlFor="phoneNumber">Phone numbers</label>
        <input
          {...register("personal phone number")}
          type="number"
          id="phoneNumber"
          placeholder="Personal phone number"
        />
        <input
          {...register("work phone number")}
          type="number"
          placeholder="Work phone number"
        />

        <label htmlFor="comment">Comment</label>
        <input
          {...register("comment", { required: false })}
          type="text"
          id="comment"
        />
        <button type="submit">Створити контрагента</button>
      </form>
    </>
  );
};

export default CustomersListItem;
