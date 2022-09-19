// import { Modal } from "bootstrap";
// import { useState } from "react";
// import { useSelector } from "react-bootstrap/Modal";

// const Cart = () => {
//   const storeData = useSelector((state) => state.cartreducer.Cart);
//   let info = [...storeData];
//   const [data, setData] = useState(info);
//   console.log(storeData);
//   console.log(data, "data");
//   return (
//     <>
//       <div className="container mt-2">
//         <Modal.Dialog>
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <h1>My Cart({}items)</h1>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p></p>
//           </Modal.Body>
//           <section className="container mt-3">
//             <div className="itemdetails">
//               {data.map((val) => {
//                 return (
//                   <div className="item_img">
//                     <img src={val.imgURL} alt="" style={{ width: 400 }} />
//                   </div>
//                 );
//               })}
//               <button
//                 onClick={() => {
//                   setData([]);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </section>
//         </Modal.Dialog>
//       </div>
//     </>
//   );
// };
// export default Cart;
