import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { addToUserHistory } = useContext(AuthContext);
    
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <div className="navBar" style={{backgroundColor:"#f6cbd5", height: "10vh"}}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h2>Quick Meet Video Call</h2>
                </div>
                
                <button className="mobileMenuButton" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
                
                <div style={{ display: "flex", alignItems: "center" }} className={mobileMenuOpen ? 'open' : ''}>
                    <div onClick={() => {
                            navigate("/history")
                            setMobileMenuOpen(false)
                        }}
                        style={{cursor:"pointer", backgroundColor:"#bebebe", padding:"7px 22px",borderRadius:"10px"}}>
                        <IconButton>
                            <RestoreIcon />
                        </IconButton>
                        History
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>
                        <div role='button' style={{color: "white", backgroundColor:"red",padding:"8px 25px", borderRadius:"10px"}}>Logout</div>
                    </Button>
                </div>
            </div>

            <div className="meetContainer" style={{backgroundColor:"#f7e0e0", width:"100%", height:"90vh"}}>
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Phone Call</h2><br />

                        <div style={{ display: 'flex', gap: "10px", flexWrap: "wrap" }}>
                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
        </>
    )
}

export default withAuth(HomeComponent)
