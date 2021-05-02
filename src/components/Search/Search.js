import {React , useState} from 'react';
import './Search.scss';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DropdownResults from '../../components/DropdownResults/DropdownResults';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 460,
        },
        display: 'flex',
        justifyContent: 'center'
    },
}));

function Search({tweets, setStorage}){
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [open, openDropdown] = useState(false);
    const searchPlaceholder = "Enter Term to search for tweets";

    const classes = useStyles();

    const search = debounce((term) => {
        // if we have term, also check if term character length is greather than 2 then make a search function call
        if( term && term.length >= 2 ) {
            let filteredResult = tweets.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));

            if(!filteredResult.length){
                filteredResult = [{id : false , name: 'Not Matched By Criteria', noImg: true}];
            }

            setResults(filteredResult);
            openDropdown(true);
        }else{
            setResults([]);
            openDropdown(false);
        }
    }, 500);

    /**
     * @param event
     */
    const inputChange = (event)=> {
        let term = event.target.value;
        //search by term
        search(term);
        // set state of term
        setTerm(term);
    };

    const updateResults = (data) => {
        setStorage(data);
    };

    const toggleDropdown = () => {
        openDropdown(!open);
    }

    return (
        <div className="Search" data-testid="Search">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    size="small"
                    placeholder={searchPlaceholder}
                    id="outlined-basic"
                    label="SearchField"
                    variant="outlined"
                    onChange={inputChange}
                />
            </form>
            <DropdownResults term={term} results={results} updateResults={updateResults} open={open} toggleDropdown={toggleDropdown}/>
        </div>
    )
};


Search.propTypes = {
    onChange: PropTypes.func,
    getStorage: PropTypes.func,
    tweets: PropTypes.array
};

Search.defaultProps = {};

export default Search;
