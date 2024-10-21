import {
  Box,
  Container,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { FC, useState } from "react";

export const MortgageCalculator: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    loan: 0,
    interestRate: 0,
    loanTerm: 0,
  });
  const [result, setResult] = useState<CalculationResultProps | null>(null);

  const btnEnabled =
    formData.interestRate && formData.loanTerm && formData.loan;
  return (
    <Box flexDirection={"row"} display={"flex"}>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <InputLabel htmlFor="input-loan-amount">Loan Amount</InputLabel>
        <Input
          type="number"
          id="input-loan-amount"
          sx={{ mb: 2 }}
          onChange={(e) => {
            setFormData({ ...formData, loan: Number(e.target.value) });
          }}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        <InputLabel htmlFor="input-interest-rate">Interest Rate(%)</InputLabel>
        <Input
          type="number"
          id="input-interest-rate"
          onChange={(e) => {
            setFormData({ ...formData, interestRate: Number(e.target.value) });
          }}
          sx={{ mb: 2 }}
        />
        <InputLabel htmlFor="input-loan-term">Loan Term(years)</InputLabel>
        <Input
          type="number"
          id="input-loan-term"
          onChange={(e) => {
            setFormData({ ...formData, loanTerm: Number(e.target.value) });
          }}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          disabled={!btnEnabled}
          onClick={() => {
            setResult(calculate(formData));
          }}
        >
          Calculate
        </Button>
      </Container>
      {result && (
        <Container
          sx={{
            alignContent: "center",
          }}
        >
          <CalculationResult {...result} />
        </Container>
      )}
    </Box>
  );
};

interface CalculationResultProps {
  monthlyPayments: number;
  totalPayment: number;
  totalInterest: number;
}
const CalculationResult: FC<CalculationResultProps> = ({
  monthlyPayments,
  totalInterest,
  totalPayment,
}) => {
  const dollarFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <TableContainer>
      <Table
        size="small"
        sx={{
          "& td": {
            borderBottom: "none",
          },
        }}
      >
        <TableBody>
          <TableRow>
            <TableCell>Monthly Mortgage payment</TableCell>
            <TableCell>{dollarFormat.format(monthlyPayments)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total payment</TableCell>
            <TableCell>{dollarFormat.format(totalPayment)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total interest paid</TableCell>
            <TableCell>{dollarFormat.format(totalInterest)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

interface FormData {
  loan: number;
  interestRate: number;
  loanTerm: number;
}
const calculate = (formData: FormData): CalculationResultProps => {
  const { loan, interestRate, loanTerm } = formData;

  const monthlyInterestRate = interestRate / 100 / 12; // i
  const totalNumOfPayments = loanTerm * 12; // n

  // Calculate monthly mortgage payment.
  const monthlyPaymentAmount =
    (loan * monthlyInterestRate) /
    (1 - 1 / Math.pow(1 + monthlyInterestRate, totalNumOfPayments));
  const totalPayment = totalNumOfPayments * monthlyPaymentAmount;

  return {
    monthlyPayments: monthlyPaymentAmount,
    totalPayment,
    totalInterest: totalPayment - loan,
  };
};
