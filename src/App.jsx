import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { AlertCircle, Trash2, Eye } from "lucide-react";
import "./App.css";

const App = () => {
  const invoices = [
    {
      id: 1,
      sender: "John Doe",
      amount: "€250.00",
      status: ["receive", "Action Required"],
      ceoCheck: true,
    },
    {
      id: 2,
      sender: "Jane Smith",
      amount: "€150.00",
      status: ["paid"],
      ceoCheck: false,
    },
    {
      id: 3,
      sender: "Michael Johnson",
      amount: "€350.00",
      status: ["pending"],
      ceoCheck: false,
    },
    {
      id: 4,
      sender: "Sarah Lee",
      amount: "€450.00",
      status: ["paid"],
      ceoCheck: false,
    },
    {
      id: 5,
      sender: "David Kim",
      amount: "€550.00",
      status: ["paid"],
      ceoCheck: false,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Sender</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>CEO-Check</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.id}</TableCell>
              <TableCell>{invoice.sender}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>
                {invoice.status.map((status, index) => (
                  <Badge
                    key={index}
                    variant={
                      status === "paid"
                        ? "success"
                        : status === "pending"
                        ? "warning"
                        : status === "receive"
                        ? "info"
                        : "danger"
                    }
                    className="mr-2"
                  >
                    {status}
                  </Badge>
                ))}
              </TableCell>
              <TableCell>
                <Checkbox checked={invoice.ceoCheck} readOnly />
              </TableCell>
              <TableCell className="flex space-x-2">
                {invoice.status.includes("Action Required") && (
                  <Button variant="ghost" size="icon">
                    <AlertCircle className="h-4 w-4" />
                  </Button>
                )}
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default App;