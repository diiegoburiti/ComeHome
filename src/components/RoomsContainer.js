import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainter({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <RoomsFilter rooms={rooms}></RoomsFilter>
      <RoomsList rooms={sortedRooms}></RoomsList>
    </>
  );
}

export default withRoomConsumer(RoomContainter);

// Método alternativo

//import React from "react";
//import RoomsFilter from "./RoomsFilter";
//import RoomsList from "./RoomsList";
//import { RoomConsumer } from "../context";
//import Loading from "./Loading";
//
//export default function RoomsContaner() {
// return (
//  <RoomConsumer>
//  {(value) => {
//  const { loading, sortedRooms, rooms } = value;
//if (loading) {
//  return <Loading></Loading>;
//}
//     return (
//       <div>
//         Hello from room container
//         <RoomsFilter rooms={rooms}></RoomsFilter>
//         <RoomsList rooms={sortedRooms}></RoomsList>
//        </div>
//      );
//    }}
//   </RoomConsumer>
// );
//}
