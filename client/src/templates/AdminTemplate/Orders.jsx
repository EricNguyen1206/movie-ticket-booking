import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BlockIcon from "@mui/icons-material/Block";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

export default function Orders({ page }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { accounts } = useSelector((state) => state.accounts);

    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Tài khoản</TableCell>
                        <TableCell>Họ tên</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>SDT</TableCell>
                        <TableCell>Mật khẩu</TableCell>
                        <TableCell>Quyền</TableCell>
                        <TableCell align="right">Chức năng</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts
                        .slice(page * 8 - 8, page * 8)
                        .map((account, index) => (
                            <TableRow key={index}>
                                <TableCell>{account.account}</TableCell>
                                <TableCell>{account.username}</TableCell>
                                <TableCell>{account.email}</TableCell>
                                <TableCell>{account.phone}</TableCell>
                                <TableCell>{account.password}</TableCell>
                                <TableCell>{account.role}</TableCell>
                                <TableCell align="right">
                                    <Button className={classes.bodyTableBtn}>
                                        <BorderColorIcon
                                            style={{ color: "green" }}
                                        />
                                    </Button>
                                    <Button className={classes.bodyTableBtn}>
                                        <BlockIcon style={{ color: "red" }} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
