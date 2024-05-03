"use client";

import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";

type Props = {};
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value: any, row: { firstName: any; lastName: any }) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

// Function to generate random age between minAge and maxAge
function getRandomAge(minAge: number, maxAge: number) {
  return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
}

// Function to generate random first and last names
function getRandomName() {
  const firstNames = [
    "Eddard",
    "Robb",
    "Sansa",
    "Bran",
    "Rickon",
    "Tyrion",
    "Catelyn",
    "Joffrey",
    "Tommen",
    "Myrcella",
    "Robert",
    "Stannis",
    "Renly",
    "Oberyn",
    "Margaery",
    "Catelyn",
    "Brienne",
    "Tormund",
    "Ramsay",
    "Theon",
  ];
  const lastNames = [
    "Greyjoy",
    "Baratheon",
    "Tyrell",
    "Martell",
    "Bolton",
    "Tully",
    "Baelish",
    "Clegane",
    "Umber",
    "Hodor",
    "Seaworth",
    "Mormont",
    "Tarly",
    "Selmy",
    "Dondarrion",
    "Trant",
    "Payne",
    "Qyburn",
    "Dayne",
    "Snow",
  ];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return { firstName, lastName };
}

// Generate more rows
const moreRows = [];
const totalRows = 100;
for (let i = 0; i < totalRows; i++) {
  const { firstName, lastName } = getRandomName();
  const age = getRandomAge(1, 100);
  moreRows.push({ id: i + 10, firstName, lastName, age });
}

// Combine the existing rows with the generated rows
const allRows = [...rows, ...moreRows];

const HEADER_HEIGHT = 300;

const Home = (props: Props) => {
  const [message, setMessage] = useState<string | null>("");
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("http://127.0.0.1:8080/api/home")
      .then((response) => {
        // handle success
        console.log(response);
        // console.log(JSON.stringify(response));
        let exampleData = {
          data: { message: "Hello world!" },
          status: 200,
          statusText: "OK",
          headers: {
            "content-length": "32",
            "content-type": "application/json",
          },
          config: {
            transitional: {
              silentJSONParsing: true,
              forcedJSONParsing: true,
              clarifyTimeoutError: false,
            },
            adapter: ["xhr", "http"],
            transformRequest: [null],
            transformResponse: [null],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {},
            headers: { Accept: "application/json, text/plain, */*" },
            method: "get",
            url: "http://127.0.0.1:8080/api/home",
          },
          request: {},
        };
        setMessage(response.data.message);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }, []);
  // const { data, loading } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 4,
  //   maxColumns: 6,
  // });

  return (
    <>
      {/* <p>Home</p> */}
      {/* {!message ? <>loading...</> : <>{message}</>} */}
      {/* <Button variant="contained">Hi</Button> */}

      <Grid container>
        <Grid
          md={12}
          sx={{
            height: `${HEADER_HEIGHT}px`,
            // backgroundColor: green[50],
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: "100dvw",
              height: `${HEADER_HEIGHT}px`,
              justifyContent: "center",
              alignItems: "center",
              px: 8,
            }}
            spacing={2}
          >
            <Box
              sx={{
                width: "256px",
              }}
            >
              <Typography variant="h6" textAlign="center" fontWeight={700}>
                ZONE
              </Typography>
              <Typography
                variant="h1"
                textAlign="center"
                sx={{
                  border: "2px solid black",
                  borderRadius: 4,
                  py: 4,
                  fontWeight: 700,
                }}
              >
                AA
              </Typography>
            </Box>
            <Box
            // sx={{
            //   px: 4,
            // }}
            >
              <Box
                sx={{
                  width: "48px",
                  height: "8px",
                  backgroundColor: "black",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                width: "256px",
              }}
            >
              <Typography variant="h6" textAlign="center" fontWeight={700}>
                ROW
              </Typography>
              <Typography
                variant="h1"
                textAlign="center"
                sx={{
                  border: "2px solid black",
                  borderRadius: 4,
                  py: 4,
                  fontWeight: 700,
                }}
              >
                001
              </Typography>
            </Box>
            <Box
              sx={{
                width: "256px",
              }}
            >
              <Typography variant="h6" textAlign="center" fontWeight={700}>
                PALLET
              </Typography>
              <Box
                // variant="h1"
                // textAlign="center"
                sx={{
                  border: "2px solid black",
                  borderRadius: 4,
                  // py: 4,
                  fontWeight: 700,
                  height: "180px",
                }}
              ></Box>
            </Box>
          </Stack>
        </Grid>
        <Grid
          md={12}
          sx={{
            height: `calc(100dvh - ${HEADER_HEIGHT}px)`,
            // backgroundColor: red[100],
          }}
        >
          <Box
            sx={{ height: `calc(100dvh - ${HEADER_HEIGHT}px)`, width: "100%" }}
          >
            <DataGrid
              rows={allRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[5]}
              // checkboxSelection
              // disableRowSelectionOnClick
              // rowSpacingType="margin"
              // slots={{ toolbar: GridToolbar }}
              // density="compact"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  AppBar,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Backdrop,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  ButtonBase,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Chip,
  CircularProgress,
  ClickAwayListener,
  Collapse,
  Container,
  CssBaseline,
  darkScrollbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  Fab,
  Fade,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Unstable_Grid2,
  Grow,
  Hidden,
  Icon,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  MobileStepper,
  Modal,
  NativeSelect,
  NoSsr,
  OutlinedInput,
  Pagination,
  PaginationItem,
  Paper,
  Popover,
  Popper,
  Portal,
  Radio,
  RadioGroup,
  Rating,
  ScopedCssBaseline,
  Select,
  Skeleton,
  Slide,
  Slider,
  Snackbar,
  SnackbarContent,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  SvgIcon,
  SwipeableDrawer,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tabs,
  TabScrollButton,
  TextField,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Zoom,
  useAutocomplete,
  GlobalStyles,
  generateUtilityClass,
  generateUtilityClasses,
  Unstable_TrapFocus,
  styled,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
