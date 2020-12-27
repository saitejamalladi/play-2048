import React, {Component} from "react";
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import {Grid} from "@material-ui/core";

class Controls extends Component {
	render() {
		return (
			<Grid container spacing={4} direction={"column"}>
				<Grid item>
					<Grid container alignItems="center" justify={"center"}>
						<Grid item xs={3}>
							<ArrowUpwardRoundedIcon onClick={() => this.props.handleClick(1)}/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Grid container alignItems="center" justify={"space-around"}>
						<Grid item xs={3}>
							<ArrowBackRoundedIcon onClick={() => this.props.handleClick(2)}/>
						</Grid>
						<Grid item xs={3}>
							<ArrowForwardRoundedIcon onClick={() => this.props.handleClick(3)}/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Grid container alignItems="center" justify={"center"}>
						<Grid item xs={3}>
							<ArrowDownwardRoundedIcon onClick={() => this.props.handleClick(4)}/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		)
	}
}
export default Controls;