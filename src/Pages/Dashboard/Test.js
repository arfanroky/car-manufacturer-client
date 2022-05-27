// import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Spinner from '../../Shared/Spinner';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import axios from 'axios';
// import { Controller, useForm } from 'react-hook-form';
// const Test = () => {
//   const {
//     register,
//     reset,
//     control,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();
//   const [user, loading] = useAuthState(auth);
//   const { id } = useParams();
//   const [product, setProduct] = useState({});
//   const [avQuantity, setAvQuantity] = useState('');
//   const [quantity, setQuantity] = useState(0);

//   const { isLoading, error } = useQuery(['equipment', id], () =>
//     fetch(`https://sleepy-anchorage-47167.herokuapp.com/equipment/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         setQuantity(data?.quantity);
//         setAvQuantity(data?.available_quantity);
//       })
//   );

//   console.log(quantity);

//   if (isLoading || loading) {
//     return <Spinner></Spinner>;
//   }

//   if (error) {
//     toast.error(error);
//   }

//   const onSubmit = (e) => {
//     const purchaseData = {
//       purchaseId: product._id,
//       img: product?.img,
//       name: e.userName,
//       email: e.email,
//       productName: e.productName,
//       location: e.location,
//       phone: e.phone,
//       price: product?.price,
//     };

//     axios
//       .post('https://sleepy-anchorage-47167.herokuapp.com/order', purchaseData)
//       .then((res) => {
//         const { data } = res;

//         if (data) {
//           console.log(data);
//           toast.success(
//             'go to dashboard click my orders and pay for the this product'
//           );
//         }
//       });
//     reset();
//   };

//   return (
//     <div className="md:h-[90vh] min-h-screen md:py-0 py-12">
//         <div className="md:w-3/4 card card-compact w-96 bg-base-100 shadow-xl border-t mt-8">
//           <h1 className="text-4xl text-center font-thin my-4">
//             Purchase Your Order
//           </h1>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="">
              
//             </div>

//             <input
//               type="submit"
//               value="Purchase"
//               className="ml-6 btn btn-accent w-full mt-4"
//             />
//           </form>

//         </div>
//     </div>
//   );
// };

// export default Test;
