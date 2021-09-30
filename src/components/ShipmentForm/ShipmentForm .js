import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const ShipmentForm  = () => {
  const {form} = useContext(UserContext);
  const [shipmentForm, setShipmentForm] = form;
  const [shipmentInfo, setShipmentInfo] = useState({
    deliverToDoor: '',
    roadNo: '',
    flat: '',
    businessName: '',
    deliveryInstructor: '',
  });

  //console.log(shipmentInfo);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    setShipmentInfo(data);
    setShipmentForm(data);
  };

  //console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="shipment-form">
    <h5 className="title">Edit Delivery Details</h5>
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      
      <input {...register("deliverToDoor", { required: true })} placeholder="Deliver To Door"/>
      {errors.deliverToDoor && <span className="error">This field is required</span>}

      <input {...register("roadNo", { required: true })} placeholder="Road No"/>
      {errors.roadNo && <span className="error">This field is required</span>}

      <input {...register("flat", { required: true })} placeholder="Flat, suite or floor"/>
      {errors.flat && <span className="error">This field is required</span>}

      <input {...register("businessName", { required: true })} placeholder="Business Name"/>
      {errors.businessName && <span className="error">This field is required</span>}

      <input {...register("deliveryInstructor", { required: true })} placeholder="Add delivery Instructor"/>
      {errors.deliveryInstructor && <span className="error">This field is required</span>}
      
      <input type="submit" value="Save & Continue" className="mr5"/>
    </form>
    </div>
  );
};

export default ShipmentForm ;