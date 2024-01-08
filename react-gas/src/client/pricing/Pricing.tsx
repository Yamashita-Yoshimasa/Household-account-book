import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import {useEffect, useState } from 'react';
import { GASClient } from "gas-client";
import * as server from "../../server/code";
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const { serverFunctions } = new GASClient<typeof server>();


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let subm: number = 0
const handleOK = () => subm = 1 ;
const handleNO = () => subm = 0;

function PricingContent() {

    const [open, setOpen] = useState(false);
    const [money, setMoney] = useState('')
    const [item, setItem] = useState('')
    
    const handleOpen = (item:string , moeny:string) => {
      setOpen(true)
      setMoney(moeny)
      setItem(item)
    }
    const handleClose = () => setOpen(false);



    const sleep = (msec: number | undefined) => new Promise(resolve => setTimeout(resolve, msec));
  
  const [total, setTotal] = useState('0');
  const [food, setFood] = useState('0');
  const [eatingout, setEatingOut] = useState('0');
  const [rent, setRent] = useState('0');
  const [gas, setGas] = useState('0');
  const [electricity, setElectricity] = useState('0');
  const [water, setWater] = useState('0');
  const [gasolin, setGasolin] = useState('0');
  const [householdgoods, setHouseholdGoods] = useState('0');
  const [gifts, setGifts] = useState('0');
  const [insurance, setInsurance] = useState('0');
  const [pets, setPets] = useState('0');

  const [foodIn, setFoodIn] = useState('');
  const [eatingoutIn, setEatingOutIn] = useState('');
  const [rentIn, setRentIn] = useState('');
  const [gasIn, setGasIn] = useState('');
  const [electricityIn, setElectricityIn] = useState('');
  const [waterIn, setWaterIn] = useState('');
  const [gasolinIn, setGasolinIn] = useState('');
  const [householdgoodsIn, setHouseholdGoodsIn] = useState('');
  const [giftsIn, setGiftsIn] = useState('');
  const [insuranceIn, setInsuranceIn] = useState('');
  const [petsIn, setPetsIn] = useState('');

  let sheetData: any

  const sheetLoad = async () => {
      sheetData = await serverFunctions.getSheetData();
      setTotal(sheetData['Total'].substr(0, sheetData['Total'].length -3) + ',' + sheetData['Total'].substr(-3, 3));
      setFood(sheetData['Food'].substr(0, sheetData['Food'].length -3) + ',' + sheetData['Food'].substr(-3, 3));
      setEatingOut(sheetData['EatingOut'].substr(0, sheetData['EatingOut'].length -3) + ',' + sheetData['EatingOut'].substr(-3, 3));
      setRent(sheetData['Rent'].substr(0, sheetData['Rent'].length -3) + ',' + sheetData['Rent'].substr( -3, 3 ));
      setGas(sheetData['Gas'].substr(0, sheetData['Gas'].length -3) + ',' + sheetData['Gas'].substr( -3, 3 ));
      setElectricity(sheetData['Electricity'].substr(0, sheetData['Electricity'].length -3) + ',' + sheetData['Electricity'].substr( -3, 3 ));
      setWater(sheetData['Water'].substr(0, sheetData['Water'].length -3) + ',' + sheetData['Water'].substr( -3, 3 ));
      setGasolin(sheetData['Gasoline'].substr(0, sheetData['Gasoline'].length -3) + ',' + sheetData['Gasoline'].substr( -3, 3 ));
      setHouseholdGoods(sheetData['HouseholdGoods'].substr(0, sheetData['HouseholdGoods'].length -3) + ',' + sheetData['HouseholdGoods'].substr( -3, 3 ));
      setGifts(sheetData['Gifts'].substr(0, sheetData['Gifts'].length -3) + ',' + sheetData['Gifts'].substr( -3, 3 ));
      setInsurance(sheetData['Insurance'].substr(0, sheetData['Insurance'].length -3) + ',' + sheetData['Insurance'].substr( -3, 3 ));
      setPets(sheetData['Pets'].substr(0, sheetData['Pets'].length -3) + ',' + sheetData['Pets'].substr( -3, 3 ));
  }

  useEffect(() => {
    sheetLoad()
  })

  const totallist = [
    {
      title: '合計',
      price: `${total}`,
      description: [
      ],
    }
  ]

  const tiers = [
    {
      title: '食費',
      price: `${food}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 4 ,
      buttonName: 'button2',
      inputMoney:`${foodIn}`
    },
    {
      title: '外食',
      price: `${eatingout}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 5 ,
      buttonName: 'button3',
      inputMoney:`${eatingoutIn}`
    },
    {
      title: '家賃',
      price: `${rent}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 6 ,
      buttonName: 'button4',
      inputMoney:`${rentIn}`
    },
    {
      title: 'ガス',
      price: `${gas}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 7 ,
      buttonName: 'button5',
      inputMoney:`${gasIn}`
    },
    {
      title: '電気',
      price: `${electricity}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 8 ,
      buttonName: 'button6',
      inputMoney:`${electricityIn}`
    },  {
      title: '水道',
      price: `${water}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 9 ,
      buttonName: 'button7',
      inputMoney:`${waterIn}`
    },
    {
      title: 'ガソリン',
      price: `${gasolin}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 10 ,
      buttonName: 'button8',
      inputMoney:`${gasolinIn}`
    },
    {
      title: '生活雑貨',
      price: `${householdgoods}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 11 ,
      buttonName: 'button9',
      inputMoney:`${householdgoodsIn}`
    },
    {
      title: 'プレゼント',
      price: `${gifts}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 12 ,
      buttonName: 'button10',
      inputMoney:`${giftsIn}`
    },
    {
      title: '保険',
      price: `${insurance}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 13 ,
      buttonName: 'button11',
      inputMoney:`${insuranceIn}`
    },
    {
      title: 'ペット',
      price: `${pets}`,
      description: [
        
      ],
      buttonText: 'Submit',
      buttonVariant: 'outlined',
      num: 14 ,
      buttonName: 'button12',
      inputMoney:`${petsIn}`
    },
  ];
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` ,mb: 6}}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            家計簿くん
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      {/* End hero unit */}

      <Container maxWidth="md" component="main">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              入力金額の確認
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              項目：{item}
              <br />
              入力金額：{money}円
              <br />
              間違いがなければOKを押してください
            </Typography>
            <CardActions>
                  <Button
                    id = 'OK'
                    fullWidth
                    variant={'contained'}
                    onClick={ () => {
                      handleOK()
                      handleClose()
                    }}
                  >
                    OK
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    id = 'NO'
                    fullWidth
                    variant={'contained'}
                    onClick={ () => {
                      handleNO()
                      handleClose()
                    }}
                  >
                    NO
                  </Button>
                </CardActions>
          </Box>
        </Modal>
      <Grid mb={5} container spacing={5} alignItems="flex-end">
          {totallist.map((list) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={list.title}
              xs={12}
              sm={list.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={list.title}
                  titleTypographyProps={{ align: 'center' }}
                  action={list.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                    &yen;{list.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {list.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                    &yen;{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor={tier.buttonName}>Amount</InputLabel>
                  <OutlinedInput
                    id={String(tier.num)}
                    startAdornment={
                    <InputAdornment position="start">&yen;</InputAdornment>}
                    label="Amount"
                    type='number'
                    value={tier.inputMoney}
                    onChange={(event) => {
                      let select = event.target.id  
                      if(select == '4' ) {
                        setFoodIn(event.target.value)
                      } else if (select == '5') {
                        setEatingOutIn(event.target.value)
                      } else if (select == '6') {
                        setRentIn(event.target.value)
                      } else if (select == '7') {
                        setGasIn(event.target.value)
                      } else if (select == '8') {
                        setElectricityIn(event.target.value)
                      } else if (select == '9') {
                        setWaterIn(event.target.value)
                      } else if (select == '10') {
                        setGasolinIn(event.target.value)
                      } else if (select == '11') {
                        setHouseholdGoodsIn(event.target.value)
                      } else if (select == '12') {
                        setGiftsIn(event.target.value)
                      } else if (select == '13') {
                        setInsuranceIn(event.target.value)
                      } else if (select == '14') {
                        setPetsIn(event.target.value)
                      }
                    }}
                  />
                </FormControl>
                </CardActions>
                <CardActions>
                  <Button
                    fullWidth
                    id={String(tier.num)}
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    onClick={async(event) => {
                      handleOpen(tier.title, tier.inputMoney)
                      await sleep(8000)
                      if(subm == 1) {
                        await serverFunctions.sendData('年間の家計簿',tier.inputMoney, (event.target as Element).id)
                        await sheetLoad()
                      } 
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
