import {
    Box,
    DialogContent,
    FormControl,
    FormLabel,
    InputLabel, MenuItem,
    Radio,
    RadioGroup,
    Select,
    Switch,
    TextField
} from "@mui/material"
import {DatePicker} from "@mui/x-date-pickers";
import {pink, red, blue, green, deepOrange, deepPurple, cyan, indigo} from '@mui/material/colors'

import {useState} from "react";
import {ModalActions} from "../ModalActions.jsx";
import dayjs from "dayjs";
import {useCreateUserMutation} from "../../../store/api/service.js";

const PROVIDERS = Object.freeze({
    ATT: {
        provider: 'ATT',
        title: 'AT&T'
    }
})

export const CreateUser = (props) => {
    const [createUser] = useCreateUserMutation()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [provider, setProvider] = useState('')
    const [dob, setDob] = useState(new dayjs())
    const [iconColor, setIconColor] = useState(pink[300])
    const [rewards, setRewards] = useState(false)

    const {onClose} = props

    const handleSave = () => {
        createUser({
            firstName,
            lastName,
            nickname: nickname.length ? nickname.trim() : undefined,
            email: email.length ? email : undefined,
            phone: phone.length ? phone : undefined,
            provider: provider.length ? provider : undefined,
            dob: dob.toISOString(),
            iconColor,
            rewards
        })
        onClose()
    }
    const handleFirstNameChange = (evt) => {
        setFirstName(evt.target.value.trim())
    }

    const handleLastNameChange = (evt) => {
        setLastName(evt.target.value.trim())
    }

    const handleNicknameChange = (evt) => {
        setNickname(evt.target.value)
    }

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value.trim())
    }

    const handlePhoneChange = (evt) => {
        setPhone(evt.target.value.trim())
    }

    const handleProviderChange = (evt) => {
        setProvider(evt.target.value)
    }

    const handleDateOfBirthChange = (newDate) => {
        setDob(newDate)
    }

    const handleIconColorChange = (evt) => {
        setIconColor(evt.target.value)
    }

    const iconRadioProps = (item) => ({
        checked: iconColor === item,
        onChange: handleIconColorChange,
        value: item,
        inputProps: { 'aria-label': item },
        sx: {
            color: item,
            '&.Mui-checked': {
                color: item,
            }
        }
    });

    return (
        <DialogContent
            dividers
        >
            <TextField
                fullWidth
                required
                label={'First'}
                variant={'standard'}
                onChange={handleFirstNameChange}
            />
            <TextField
                fullWidth
                required
                label={'Last'}
                variant={'standard'}
                onChange={handleLastNameChange}
            />
            <TextField
                fullWidth
                label={'Nickname'}
                variant={'standard'}
                onChange={handleNicknameChange}
            />
            <Box display={'flex'} justifyItems={'space-evenly'} alignItems={'flex-end'} marginBottom={'1.2rem'} marginTop={'1.2rem'}>
                <TextField
                    fullWidth
                    label={'Phone (xxx)xxx-xxxx'}
                    variant={'standard'}
                    sx={{marginRight: '2.4rem'}}
                    onChange={handlePhoneChange}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">Provider</InputLabel>
                    <Select
                        fullWidth
                        variant={'standard'}
                        label={'Provider'}
                        value={provider}
                        onChange={handleProviderChange}
                    >
                        <MenuItem value={''}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={PROVIDERS.ATT.provider}>{PROVIDERS.ATT.title}</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <TextField
                fullWidth
                label={'Email'}
                variant={'standard'}
                type={'email'}
                onChange={handleEmailChange}
            />
            <DatePicker
                closeOnSelect
                disableFuture
                label={'Date of birth'}
                value={dob}
                sx={{width: '100%', marginTop: '1.2rem', marginBottom: '1.2rem'}}
                onChange={(newDate) => handleDateOfBirthChange(newDate)}
            />
            <FormLabel>Icon Color</FormLabel>
            <RadioGroup row>
                <Radio key={1} {...iconRadioProps(pink[300])}/>
                <Radio key={2} {...iconRadioProps(red[900])}/>
                <Radio key={3} {...iconRadioProps(blue[800])}/>
                <Radio key={4} {...iconRadioProps(green[600])}/>
                <Radio key={5} {...iconRadioProps(deepOrange[600])}/>
                <Radio key={6} {...iconRadioProps(deepPurple[400])}/>
                <Radio key={7} {...iconRadioProps(cyan[500])}/>
                <Radio key={9} {...iconRadioProps(indigo[700])}/>
            </RadioGroup>
            <FormLabel>Earn rewards</FormLabel>
            <Switch value={rewards} onChange={() => setRewards(!rewards)}/>
        <ModalActions onClose={() => onClose()} onSubmit={handleSave} />
        </DialogContent>
    )
}

export default CreateUser