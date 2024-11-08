import { useState } from "react"
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import Row from "../components/navigation/Row";
import Button from "../components/navigation/Button";

export default function index(){
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("0");
    const [oper, setOper] = useState("");

    function handleNumber(num: string) {
        if (valor2 === "0")
            setValor2(num);
        else
            setValor2(valor2 + num);
    }

    function handleOperator(op: string) {
        setValor1(valor2);
        setOper(op);
        setValor2("0");
    }

    function handlePonto(){
        if(!valor2.includes("."))
            setValor2(valor2 + ".");
    }

    function clear() {
        setValor1("");
        setValor2("0");
        setOper("");
    }

    function handleSinal() {
        setValor2((parseFloat(valor2) * -1).toString());
    }

    function handleEqual() {
        switch (oper) {
            case "+":
                setValor2((parseFloat(valor1) + parseFloat(valor2)).toString())
                setValor1("");
                setOper("");
                break;

            case "-":
                setValor2((parseFloat(valor1) - parseFloat(valor2)).toString())
                setValor1("");
                setOper("");
                break;

            case "*":
                setValor2((parseFloat(valor1) * parseFloat(valor2)).toString())
                setValor1("");
                setOper("");
                break;

            case "/":
                if(valor2 == "0"){
                    clear();
                    break;
                }

                setValor2((parseFloat(valor1) / parseFloat(valor2)).toString())
                setValor1("");
                setOper("");
                break;
                
            case "%":
                setValor2((parseFloat(valor1) * parseFloat(valor2) / 100).toString());
                setValor1("");
                setOper("");
                break;
        
            default:
                break;
        }
    }

    return (
        <>
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={[styles.value, {fontSize: 20}]}>
            {oper == "" ? valor2 : valor1 + " " + oper + " " + valor2}
          </Text>
          <Text style={styles.value}>
            {valor2}
          </Text>
          <Row>
            <Button size="" text="C"   theme="secondary" onPress={() => clear()} />
            <Button size="" text="+/-" theme="secondary" onPress={() => handleSinal()}   />
            <Button size="" text="%"   theme="secondary" onPress={() => handleOperator("%")} />
            <Button size="" text="/"   theme="accent"    onPress={() => handleOperator("/")}   />
          </Row>

          <Row>
            <Button size="" text="7" theme=""       onPress={() => handleNumber("7")} />
            <Button size="" text="8" theme=""       onPress={() => handleNumber("8")} />
            <Button size="" text="9" theme=""       onPress={() => handleNumber("9")} />
            <Button size="" text="x" theme="accent" onPress={() => handleOperator("*")} />
          </Row>

          <Row>
            <Button size="" text="4" theme=""       onPress={() => handleNumber("4")} />
            <Button size="" text="5" theme=""       onPress={() => handleNumber("5")} />
            <Button size="" text="6" theme=""       onPress={() => handleNumber("6")} />
            <Button size="" text="-" theme="accent" onPress={() => handleOperator("-")} />
          </Row>

          <Row>
            <Button size="" text="1" theme=""       onPress={() => handleNumber("1")} />
            <Button size="" text="2" theme=""       onPress={() => handleNumber("2")} />
            <Button size="" text="3" theme=""       onPress={() => handleNumber("3")} />
            <Button size="" text="+" theme="accent" onPress={() => handleOperator("+")} />
          </Row>

          <Row>
            <Button size="double" text="0" theme=""       onPress={() => handleNumber("0")} />
            <Button size=""       text="." theme=""       onPress={() => handlePonto()} />
            <Button size=""       text="=" theme="accent" onPress={() => handleEqual()}  />
          </Row>
        </SafeAreaView>
      </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#202020",
      justifyContent: "flex-end"
    },
    value: {
      color: "#fff",
      fontSize: 40,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10
    }
});