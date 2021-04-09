import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 600,
	},
});

export const CryptoData = ({currency}) => {
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [currencyData, setCurrencyData] = useState([]);

	const handleChangePage = (newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(() => {
		const fetchCrypto = async () => {
			const { data } = await axios.get(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
			);
			setCurrencyData(data);
		};
		fetchCrypto();
	}, [currency]);

		const rows = currencyData.map((coin, index) => {
			return {
				id: index + 1,
				name: coin.name,
				price: new Intl.NumberFormat(currency, {
					style: 'currency',
					currency: currency,
				}).format(coin.current_price),
				image: coin.image,
				cap: new Intl.NumberFormat(currency, {
					style: 'currency',
					currency: currency,
				}).format(coin.market_cap),
				priceChange: new Intl.NumberFormat(currency, {
					style: 'currency',
					currency: currency,
				}).format(coin.price_change_24h),
			};
		});

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Market cap</TableCell>
							<TableCell>Last 24</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => (
								<TableRow key={row.id}>
									<TableCell component="th" scope="row">
										{row.id}
									</TableCell>
									<TableCell component="th" scope="row">
										<img src={row.image} className="coin-image" alt="crypto currency"/>{' '}
										<strong>{row.name}</strong>
									</TableCell>
									<TableCell>
										<strong>{row.price}</strong>
									</TableCell>
									<TableCell>{row.cap}</TableCell>
									<TableCell>{row.priceChange}</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};