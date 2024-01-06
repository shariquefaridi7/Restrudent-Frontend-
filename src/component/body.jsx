import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"

import { useData } from "../Datacontext/dataContext";

const Body = () => {

    const { sharedData, setSharedData, setAmount, Amount } = useData();

    const handleAdd = (id) => {
        const existingProduct = sharedData.find((item, i) => i === id);
        if (existingProduct) {
            setSharedData((prev) => {
                return prev.map((item, i) => {
                    if (i === id) {
                        setAmount(Amount + item.price)
                        return { ...item, no: item.no + 1 };
                    }

                    return item;
                });
            })
        } else {
            const data = arr.filter((item, i) => i === id);
            setSharedData((prev) => [...prev, { name: data[0].name, price: data[0].price, no: 1 }]);
        }
    };


    const arr = [
        {
            id: 1,
            name: "Pizza",
            price: 200,
            img: "../../../public/pizza.jpeg"
        },

        {
            id: 2,
            name: "Burger",
            price: 250,
            img: "../../../../public/burger.jpeg"
        },
        {
            id: 3,
            name: "Cold Drink",
            price: 100,
            img: "../../../../public/drink.jpeg"
        },
        {
            id: 4,
            name: "Pasta",
            price: 60,
            img: "../../../../public/pasta.jpeg"
        },


        {
            id: 5,
            name: "Chawmin",
            price: 60,
            img: "../../../../public/chawmin.jpeg"
        },
        {
            id: 6,
            name: "Chaule Bhatore",
            price: 100,
            img: "../../../../public/bhatore.jpeg"
        },
        {
            id: 7,
            name: " French frize",
            price: 90,
            img: "../../../../public/french.jpeg"
        },
        {
            id: 8,
            name: "Chicken Legs",
            price: 200,
            img: "../../../../public/legs.jpeg"
        },
        {
            id: 9,
            name: "Momos",
            price: 90,
            img: "../../../../public/momos.jpeg"
        },
        {
            id: 10,
            name: "Pasti",
            price: 50,
            img: "../../../../public/pasti.jpeg"
        },
        {
            id: 11,
            name: "Chiecken Roll",
            price: 120,
            img: "../../../../public/roll.jpeg"
        },

        {
            id: 12,
            name: "Samosa",
            price: 10,
            img: "../../../../public/samosa.jpeg"
        },


    ];
    return (
        <div>

            <TableContainer component={Paper} sx={{
                color: "white", border: 1, borderColor: "black", '@media (min-width:600px)': { p: '2rem' }, p: 1
            }}>
                <Table >

                    <TableBody>
                        {
                            arr?.map((item, i) => {

                                return (
                                    <>
                                        <TableRow>

                                            <TableCell sx={{ fontSize: "1.3rem", width: "23%" }}>{item?.name}</TableCell>
                                            <TableCell sx={{ fontSize: "1.3rem" }}>{item?.price}</TableCell>
                                            <TableCell sx={{ width: "23%" }}><img src={item?.img} width="100px" />  </TableCell>
                                            <TableCell>
                                                <Button variant="contained" color="success" onClick={() => handleAdd(i)}>Add</Button>
                                            </TableCell>

                                        </TableRow>
                                    </>
                                )

                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>

            {
                console.log(sharedData)
            }

        </div>
    )
}

export default Body