import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material"
import { useData } from "../Datacontext/dataContext";
import { useEffect, useState } from "react";



const Model = () => {
    const { sharedData, open, setopen, setcount, setSharedData, count, Amount, setAmount } = useData();



    useEffect(() => {
        setcount(sharedData.length);
    }, [sharedData])

    useEffect(() => {
        const totalAmount = sharedData.reduce((total, item) => total + item.price, 0);
        setAmount(totalAmount)
    }, [count])

    const handelAdd = (id) => {
        setSharedData((prevSharedData) => {
            return prevSharedData.map((item, i) => {
                if (i === id) {
                    setAmount(Amount + item.price)
                    return { ...item, no: item.no + 1 };
                }

                return item;
            });
        });
    };

    const handelDel = (id, no) => {

        setSharedData((prevSharedData) => {
            return prevSharedData.map((item, i) => {
                if (i === id) {
                    setAmount(Amount - item.price)
                    return { ...item, no: item.no - 1 }
                } else {
                    return item
                }
            })
        })
        if (no == 1) {

            setSharedData((prevSharedData) => {
                return prevSharedData.filter((item, i) => i != id)
            })
        }

    }


    return (
        <div>

            <Dialog
                open={open}
                fullWidth
            >
                <DialogTitle sx={{ bgcolor: "brown", color: "white", lineHeight: 0 }} >
                    <h2>Cart </h2>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {

                            sharedData.map((item, i) => {
                                return (<>

                                    <Stack direction={"row"} justifyContent={"space-between"} m={1.2} >
                                        <Stack direction={"column"} mt="0.5rem" width="20%" >
                                            <Typography fontSize="1.2rem" fontWeight="bold">{item.name}</Typography>
                                            <Typography fontSize="1.2rem" fontWeight="bold">{item.price}</Typography>
                                        </Stack>
                                        <Typography fontSize="1.2rem" textAlign="center" fontWeight="bold" sx={{ '@media(min-width:600px)': { width: "7%" } }} mt="1rem" border={2.4} width="15%" height="10%" p="2.4px" ml="2rem" borderRadius="10%">x {item.no}</Typography>

                                        <Stack direction={"row"} >
                                            <Button color="error" sx={{ fontSize: "2rem" }} onClick={() => handelDel(i, item.no)}>-</Button>
                                            <Button color="success" sx={{ fontSize: "2rem" }} onClick={() => handelAdd(i)}>+</Button>
                                        </Stack>
                                    </Stack >
                                    <hr />
                                </>
                                )
                            })

                        }
                        <Typography textAlign="end" fontWeight="bold" fontSize="1.3rem">Total Amount : {Amount}</Typography>
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setopen(false)} sx={{ bgcolor: "white", color: "brown", borderColor: "brown" }} variant="outlined">close</Button>
                    <Button onClick={() => setopen(false)} sx={{ bgcolor: "brown" }} variant="contained">Order</Button>

                </DialogActions>
            </Dialog>

        </div >
    )
}

export default Model
