import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const FibonacciCalculator = () => {
    const [n, setN] = useState(0);
    const [fibonacciNumbers, setFibonacciNumbers] = useState([]);

    const calculateFibonacci = () => {
        const fibNumber = [0, 1];
        for (let i = 2; i <= n; i++) {
            fibNumber[i] = fibNumber[i - 1] + fibNumber[i - 2];
        }
        setFibonacciNumbers(fibNumber as never);
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
                Enter the value of n to calculate Fibonacci numbers:
            </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                keyboardType="numeric"
                value={n.toString()}
                onChangeText={(value) => setN(parseInt(value))}
            />
            <Button title="Calculate" onPress={calculateFibonacci} />
            <ScrollView style={{ marginTop: 20 }}>
                {fibonacciNumbers.map((num, index) => (
                    <Text key={index} style={{ fontSize: 18 }}>
                        Fibonacci No({index}): {num}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
};

export default FibonacciCalculator;
