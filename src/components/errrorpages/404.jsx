import React from "react";
import "./404.css";
function _404() {
    return (
        <div className={"_404-container"}>
            <img src={"https://i.imgur.com/A040Lxr.png"} alt={"404"}  height={320}/>
            <h1>This Page is Lost in Space</h1>
            <paragraph>
                You thought this mission to the moon would be a quick six month thing. Your neighbor offered to look
                after your dog. Your high school math teacher was impressed. He once said you wouldn’t amount to
                anything.You sure showed him. But now here you are, fifty feet from your spaceship with no way to get
                back. Your dog will be so sad. Your math teacher will be so smug. Pretty devastating.
            </paragraph>
            <div className={"button-container"}>
                <button className={"btn-primary-color"}><a href={"/"}>Go Home</a></button>
                <button className={"btn-primary-color"}>Contact support</button>
            </div>
        </div>
    )
}

export default _404;