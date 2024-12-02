import { addExpense } from "@app-redux/slice/expanses/expanses.slice";
import { NavigationContainerRef, useNavigation } from "@react-navigation/native";
import { RootParamList } from "@utils/routes";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddExpanseController = () => {
    //Custom Hooks
    const navigation = useNavigation<NavigationContainerRef<RootParamList>>();
    const dispatch = useDispatch();

    // States
    const [expanseName, setExpanseName] = useState('');
    const [expanseDescription, setExpanseDescription] = useState('');
    const [selectedOptionError, setSelectedOptionError] = useState<string>('');
    const [expanseAmountError, setExpanseAmountError] = useState('');

    //Error States
    const [expanseNameError, setExpanseNameError] = useState('');
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [expanseAmount, setExpanseAmount] = useState('');

    const options = [
        { label: 'Food', value: 'food' },
        { label: 'Transport', value: 'transport' },
        { label: 'Entertainment', value: 'entertainment' },
        { label: 'Fees', value: 'fees' },
    ];


    const validateForm = () => {
        let isValid = true;

        setExpanseNameError('');
        setExpanseAmountError('');
        setSelectedOptionError('');

        if (!expanseName.trim()) {
            setExpanseNameError('Expanse Name is required.');
            isValid = false;
        }

        if (!expanseAmount.trim()) {
            setExpanseAmountError('Expanse Amount is required.');
            isValid = false;
        } else {
            const amount = parseFloat(expanseAmount);
            if (isNaN(amount) || amount <= 0) {
                setExpanseAmountError('Please enter a valid amount greater than 0.');
                isValid = false;
            }
        }

        if (!selectedOption) {
            setSelectedOptionError('Please select an Expanse Type.');
            isValid = false;
        }

        return isValid;
    };

    const handleAddExpanse = () => {
        const isFormValid = validateForm();

        if (isFormValid) {
            const newExpense = {
                id: new Date().getTime(),
                category: selectedOption,
                name: expanseName,
                description: expanseDescription,
                createTime: moment().format('DD-MM-YYYY'),
                amount: parseFloat(expanseAmount),
            };

            console.log({ newExpense });

            dispatch(addExpense(newExpense));
            navigation.goBack();
        }
    }

    return {
        expanseName,
        setExpanseName,
        expanseDescription,
        setExpanseDescription,
        selectedOptionError,
        expanseAmountError,
        expanseNameError,
        setSelectedOption,
        setExpanseAmount,
        expanseAmount,
        selectedOption,
        options,
        handleAddExpanse
    }
}

export default AddExpanseController;