import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material"
import { useData } from "../Datacontext/dataContext";



const Model = ({ open, setopen }) => {
    const { sharedData } = useData();

    console.log(sharedData)


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

                            sharedData.map((item) => {
                                return (<>
                                    <Stack direction={"row"} justifyContent={"space-between"} m={1.2} >
                                        <Stack direction={"column"} >
                                            <Typography fontSize="1.2rem" fontWeight="bold">{item.name}</Typography>
                                            <Typography fontSize="1.2rem" fontWeight="bold">{item.price}</Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2}>
                                            <Button color="error" sx={{ fontSize: "2rem" }}>-</Button>
                                            <Button color="success" sx={{ fontSize: "2rem" }}>+</Button>
                                        </Stack>
                                    </Stack>
                                    <hr />
                                </>
                                )
                            })

                        }
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setopen(false)} sx={{ bgcolor: "white", color: "brown", borderColor: "brown" }} variant="outlined">close</Button>
                    <Button onClick={() => setopen(false)} sx={{ bgcolor: "brown" }} variant="contained">Order</Button>

                </DialogActions>
            </Dialog>

        </div>
    )
}

export default Model
