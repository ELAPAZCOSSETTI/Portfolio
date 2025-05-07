"use client";
import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
export default function App() {
    
    const [Visible, setVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setVisible(false);
        const timer = setTimeout (() => {
            setVisible(true);
        }, 500);
        return () => clearTimeout(timer);    
    }, [pathname]);

    return (
        <div className={`transition-opacity duration-500 ease-in-out ${Visible? 'opacity-100' : 'opacity-0'}` }>
            <Box className="w-full  flex flex-row mt-12 justify-center gap-12">
                <Box className="relative w-full h-[500px] rounded-lg overflow-hidden">
                    <Box className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-xl  h-full">
                        <img
                            src="https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Comercios"
                            className="rounded-lg"
                        />

                    </Box>
                </Box>

                <Box className="relative w-96 h-[500px] shadow-xl rounded-lg overflow-hidden group">
                    <img
                        src="https://images.pexels.com/photos/14739822/pexels-photo-14739822.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Logo"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Typography className="text-2xl font-bold text-center p-4">
                            🔹 Fácil acceso a turnos: Nuestros usuarios pueden agendar citas de
                            forma fácil y rápida, ¡sin esperas ni complicaciones!
                        </Typography>
                    </div>
                </Box>

            </Box>
            <Box className="relative h-[300px] shadow-xl rounded-lg overflow-hidden flex flex-row justify-center mt-12">
                <img
                    src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Logo"
                    className="absolute  "
                />
                <Box className="absolute inset-0 flex flex-col items-center  bg-black bg-opacity-50 text-white p-4">
                    <Typography variant="h4" gutterBottom>
                        ¿Por qué elegir nuestra App?
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        maxWidth="800px"
                    >
                        Nuestra app ofrece una experiencia única, fácil de usar y adaptada tanto para comercios como para clientes. Con tecnología avanzada, podrás gestionar tu negocio con facilidad y disfrutar de beneficios exclusivos como cliente.
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}
