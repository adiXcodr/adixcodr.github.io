import React, { useEffect, useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import axios from "axios";
import 'react-chat-widget/lib/styles.css';
import logo from '../assets/Image/pp.jpg';
import { v4 as uuidv4 } from 'uuid';
import { baseUrl } from "../constants";
import "./ChatbotHide.css";

const ChatBot = () => {
    const isMobile = typeof window.orientation !== 'undefined';
    const [sessionID, setSessionID] = useState(uuidv4());
    useEffect(() => {
        addResponseMessage("Welcome to Adittya's Portfolio, feel free to reach out to his personal number")
        addResponseMessage("How may I help you?")
        if (isMobile) {
            let selected = document.getElementsByClassName("rcw-launcher");
            if (selected && selected.length > 0) {
                for (let el of selected) {
                    el.addEventListener("click", () => window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    }));
                }
            }
        }
    }, []);

    const getAIResponse = async (msg) => {
        try {
            const SESSION_ID = String(sessionID);
            let res = await axios.get(`${baseUrl}/chatbot/getResponse`,{params:{
                message: msg,
                sessionID: SESSION_ID
            }})
            console.log("Response is",res.data);
            return (res.data);
        } catch (err) {
            console.log("AI Response Error", err);
            return ("Sorry, could not understand you");
        }
    };

    const handleNewUserMessage = async (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        let response = await getAIResponse(newMessage);
        addResponseMessage(response);
    };


    return (
        <div id="widgetMain">
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                profileAvatar={logo}
                title="Adittya Dey"
                subtitle="(+91) 7896186169"
            />
        </div>
    );
};

export default ChatBot;