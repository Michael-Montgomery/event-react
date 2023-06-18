import React from "react";

import Header from "../components/header/header";
import EventDetailsAndBanner from "../components/eventdetailsandbanner/eventdetailsandbanner";
import Invite from "../components/invite/invite";



function Event(props) {
    return (
        <>
            <Header></Header>
            <EventDetailsAndBanner></EventDetailsAndBanner>
            <Invite></Invite>
            
        </>
    );
}

export default Event;