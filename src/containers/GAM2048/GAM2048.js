import React, {Component} from "react";
import ReactDOM from 'react-dom';
import classes from './GAM2048.module.css';
import {Grid} from "@material-ui/core";
import Tile from "../../components/Tile/Tile";
import {Backdrop, Modal} from "@material-ui/core";

class GAM2048 extends Component {
	state = {
		active: false,
		board : null,
		rows: 4,
		cols: 4
	}
	componentDidMount() {
		this.focusDiv();
		this.initBoard();
		ReactDOM.findDOMNode(this).addEventListener('keydown', (event) => {this.handleKeyPress(event)});
		ReactDOM.findDOMNode(this).addEventListener('escape', (event) => {this.handleKeyPress(event)});
	}
	focusDiv() {
		ReactDOM.findDOMNode(this.refs['theDiv']).focus();
	}
	generateBoard = () => {
		let board = [];
		for(let i=1; i <=this.state.rows; i++) {
			let row = [];
			for(let j=1; j<=this.state.cols; j++) {
				if(Math.floor(Math.random() * 4) === 0) {
					row.push(Math.pow(2, Math.floor(Math.random() * 2) + 1));
				} else {
					row.push(0);
				}
			}
			board.push(row);
		}
		return board;
	};
	initBoard = () => {
		this.setState({board: this.generateBoard()});
	}
	moveLeft = (updatedBoard, rows, cols) => {
		for(let row=1; row <= rows; row++) {
			for(let col=1; col < cols; col++) {
				// 1. Find 2 consecutive non zeros(say at indices i & j)
				// 2. If both the numbers are different, replace the current index with ith index and set ith index to 0.
				// 3. If both the numbers are same, replace the current index with the summation od ith and jth index and Set the ith and jth index to 0
				let i=col;
				while(i <= cols && updatedBoard[row-1][i-1] === 0) {
					i=i+1;
				}
				if(i >= cols+1 || updatedBoard[row-1][i-1] === 0) {
					break;
				}
				let j=i+1;
				while(j <= cols && updatedBoard[row-1][j-1] === 0) {
					j=j+1;
				}
				if( j >= cols+1 || updatedBoard[row-1][j-1] === 0) {
					let temp = updatedBoard[row-1][i-1];
					updatedBoard[row-1][i-1] = 0;
					updatedBoard[row-1][col-1] = temp;
					break;
				} else {
					if(updatedBoard[row-1][i-1] === updatedBoard[row-1][j-1]) {
						let temp = updatedBoard[row-1][i-1] + updatedBoard[row-1][j-1];
						updatedBoard[row-1][i-1] = 0;
						updatedBoard[row-1][j-1] = 0;
						updatedBoard[row-1][col-1] = temp;
					} else {
						let temp = updatedBoard[row-1][i-1];
						updatedBoard[row-1][i-1] = 0;
						updatedBoard[row-1][col-1] = temp;
					}
				}
			}
		}
		return updatedBoard;
	}
	moveUp = (updatedBoard, rows, cols) => {
		for(let col=1; col <= cols; col++) {
			for(let row=1; row < rows; row++) {
				// 1. Find 2 consecutive non zeros(say at indices i & j)
				// 2. If both the numbers are different, replace the current index with ith index and set ith index to 0.
				// 3. If both the numbers are same, replace the current index with the summation od ith and jth index and Set the ith and jth index to 0
				let i=row;
				while(i <= rows && updatedBoard[i-1][col-1] === 0) {
					i=i+1;
				}
				if(i >= rows+1 || updatedBoard[i-1][col-1] === 0) {
					break;
				}
				let j=i+1;
				while(j <= rows && updatedBoard[j-1][col-1] === 0) {
					j=j+1;
				}
				if( j >= rows+1 || updatedBoard[j-1][col-1] === 0) {
					let temp = updatedBoard[i-1][col-1];
					updatedBoard[i-1][col-1] = 0;
					updatedBoard[row-1][col-1] = temp;
					break;
				} else {
					if(updatedBoard[i-1][col-1] === updatedBoard[j-1][col-1]) {
						let temp = updatedBoard[i-1][col-1] + updatedBoard[j-1][col-1];
						updatedBoard[i-1][col-1] = 0;
						updatedBoard[j-1][col-1] = 0;
						updatedBoard[row-1][col-1] = temp;
					} else {
						let temp = updatedBoard[i-1][col-1];
						updatedBoard[i-1][col-1] = 0;
						updatedBoard[row-1][col-1] = temp;
					}
				}
			}
		}
		return updatedBoard;
	}
	moveRight = (updatedBoard, rows, cols) => {
		for(let row=1; row <= rows; row++) {
			for(let col=cols; col>1 ; col--) {
				// 1. Find 2 consecutive non zeros(say at indices i & j)
				// 2. If both the numbers are different, replace the current index with ith index and set ith index to 0.
				// 3. If both the numbers are same, replace the current index with the summation od ith and jth index and Set the ith and jth index to 0
				let i=col;
				while(i>0 && updatedBoard[row-1][i-1] === 0) {
					i=i-1;
				}
				if(i <=0 || updatedBoard[row-1][i-1] === 0) {
					break;
				}
				let j=i-1;
				while(j>0 && updatedBoard[row-1][j-1] === 0) {
					j=j-1;
				}
				if( j <= 0 || updatedBoard[row-1][j-1] === 0) {
					let temp = updatedBoard[row-1][i-1];
					updatedBoard[row-1][i-1] = 0;
					updatedBoard[row-1][col-1] = temp;
					break;
				} else {
					if(updatedBoard[row-1][i-1] === updatedBoard[row-1][j-1]) {
						let temp = updatedBoard[row-1][i-1] + updatedBoard[row-1][j-1];
						updatedBoard[row-1][i-1] = 0;
						updatedBoard[row-1][j-1] = 0;
						updatedBoard[row-1][col-1] = temp;
					} else {
						let temp = updatedBoard[row-1][i-1];
						updatedBoard[row-1][i-1] = 0;
						updatedBoard[row-1][col-1] = temp;
					}
				}
			}
		}
		return updatedBoard;
	}
	moveDown = (updatedBoard, rows, cols) => {
		for(let col=1; col <= cols; col++) {
			for(let row=rows; row>1 ; row--) {
				// 1. Find 2 consecutive non zeros(say at indices i & j)
				// 2. If both the numbers are different, replace the current index with ith index and set ith index to 0.
				// 3. If both the numbers are same, replace the current index with the summation od ith and jth index and Set the ith and jth index to 0
				let i=row;
				while(i>0 && updatedBoard[i-1][col-1] === 0) {
					i=i-1;
				}
				if(i <=0 || updatedBoard[i-1][col-1] === 0) {
					break;
				}
				let j=i-1;
				while(j>0 && updatedBoard[j-1][col-1] === 0 ) {
					j=j-1;
				}
				if( j <= 0 || updatedBoard[j-1][col-1] === 0) {
					let temp = updatedBoard[i-1][col-1];
					updatedBoard[i-1][col-1] = 0;
					updatedBoard[row-1][col-1] = temp;
					break;
				} else {
					if(updatedBoard[i-1][col-1] === updatedBoard[j-1][col-1]) {
						let temp = updatedBoard[i-1][col-1] + updatedBoard[j-1][col-1];
						updatedBoard[i-1][col-1] = 0;
						updatedBoard[j-1][col-1] = 0;
						updatedBoard[row-1][col-1] = temp;
					} else {
						let temp = updatedBoard[i-1][col-1];
						updatedBoard[i-1][col-1] = 0;
						updatedBoard[row-1][col-1] = temp;
					}
				}
			}
		}
		return updatedBoard;
	}
	populateNewDigits = (board) => {
		for(let row=1; row <= board.length; row++) {
			for(let col=1; col<= board[row-1].length; col++) {
				if(board[row-1][col-1] === 0) {
					let rand = Math.floor(Math.random() * 20);
					let value = 0;
					if(rand >= 19) {
						value = 4;
					} else if(rand >= 11) {
						value = 2;
					}
					board[row-1][col-1] = value
				}
			}
		}
		return board;
	}
	updateBoard = (key) => {
		let updatedBoard = this.state.board;
		switch (key) {
			case 1: updatedBoard = this.moveUp(updatedBoard, this.state.rows, this.state.cols); break;
			case 2: updatedBoard = this.moveLeft(updatedBoard, this.state.rows, this.state.cols); break;
			case 3: updatedBoard = this.moveRight(updatedBoard, this.state.rows, this.state.cols); break;
			case 4: updatedBoard = this.moveDown(updatedBoard, this.state.rows, this.state.cols); break;
			default:
		}
		updatedBoard = this.populateNewDigits(updatedBoard);
		this.setState({board: updatedBoard});
	};
	handleKeyPress = (event) => {
		switch (event.key) {
			case 'ArrowUp':
				this.handleClick(1);
				break;
			case 'ArrowLeft':
				this.handleClick(2);
				break;
			case 'ArrowRight':
				this.handleClick(3);
				break;
			case 'ArrowDown':
				this.handleClick(4);
				break;
			case 'Escape':
				this.handleClick(5);
				break;
			default:
		}
	}
	handleClick = (key) => {
		if(key) {
			this.updateBoard(key);
		}
	}
	handleReset = () => {
		this.initBoard();
	}
	getScore = (grid) => {
		if(grid && grid.length > 0) {
			return grid.reduce((rowTotal, row) => {
				return row.reduce((total, currentCell) => {
					if(currentCell > 4) {
						return total + currentCell;
					}
					return total;
				}, rowTotal)
			}, 0);
		}
	}
	handleStart = () => {
		this.setState({active: true});
	}
	handleTouchStart = (e) => {
		const firstTouch = e.touches[0];
		this.setState({
			xStartLocation: firstTouch.clientX,
			yStartLocation: firstTouch.clientY
		})
	};

	handleTouchMove = (e) => {
		let xStartLocation = this.state.xStartLocation;
		let yStartLocation = this.state.yStartLocation;
		if ( ! xStartLocation || ! yStartLocation ) {
			return;
		}
		let xEndLocation = e.changedTouches[0].clientX;
		let yEndLocation = e.changedTouches[0].clientY;
		let xDiff = xStartLocation - xEndLocation;
		let yDiff = yStartLocation - yEndLocation;
		if(xDiff !== 0 || yDiff !== 0) {
			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
				if ( xDiff > 0 ) {
					this.handleClick(2);
				} else {
					this.handleClick(3);
				}
			} else {
				if ( yDiff > 0 ) {
					this.handleClick(1);
				} else {
					this.handleClick(4);
				}
			}
		}
		this.setState({
			xStartLocation: null,
			yStartLocation: null
		})
		this.handleClick()
	};
	render() {
		let board  = null;
		if(this.state.board && this.state.board.length > 0) {
			board = (
				<div className={classes.Grid}>
					{
						this.state.board.map((row, rowIndex) => (
							<div key={rowIndex} className={classes.GridRow}>
								{
									row.map((cell, cellIndex) => (
										<Tile key={rowIndex + "-" + cellIndex}>
											{cell}
										</Tile>
									))
								}
							</div>
						))
					}
				</div>
			);
		}
		return (
			<div ref="theDiv"
			     onTouchStart={this.handleTouchStart}
			     onTouchEnd={this.handleTouchMove}
			     tabIndex={-1}
			     className={classes.Container} >
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.Modal}
					open={!this.state.active}
					onClose={this.handleStart}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<div className={classes.StartButton} onClick={this.handleStart}>
						Start!!!
					</div>
				</Modal>
				<div className={classes.GAM2048}>
					<Grid container>
						<Grid item xs={6}>
							<h1>2048</h1>
						</Grid>
						<Grid item xs={6}>
							<div className={classes.ScoreBoard}>
								<h3>Score</h3>
								<p>{this.getScore(this.state.board)}</p>
							</div>
						</Grid>
						<Grid item xs={8}>
							<div className={classes.About}>
								<p>Join the tiles, get to 2048!<br/>
								<a target={"_blank"} rel="noreferrer" href={"https://en.wikipedia.org/wiki/2048_(video_game)"}>How to play →</a></p>
							</div>
						</Grid>
						<Grid item xs={4}>
							<button
						    className={classes.Button}
							  onClick={this.handleReset}>
								New Game
							</button>
						</Grid>
					</Grid>
					<div className={classes.Board}>
						{board}
					</div>
					<div className={classes.Feedback}>
						<a target="_blank" rel="noreferrer" href={"https://saiteja-malladi.web.app"}>Send Feedback</a>
					</div>
				</div>
			</div>
		);
	}
}
export default GAM2048;