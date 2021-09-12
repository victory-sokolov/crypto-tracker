import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { SearchContext} from '../context';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 400
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1
	},
	iconButton: {
		padding: 10
	}
}));

export default function SearchBar() {
	const classes = useStyles();
	const setSearchTerm = useContext(SearchContext)[1];

	const handleSearchInput = (event) => {
		setSearchTerm(event.target.value.toLowerCase());
	};

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Search Crpyto currency"
				inputProps={{ 'aria-label': 'search crypto currency' }}
				onChange={handleSearchInput}
			/>
			<IconButton
				type="submit"
				className={classes.iconButton}
				aria-label="search"
			>
				<SearchIcon className={classes.input} />
			</IconButton>
		</Paper>
	);
}
