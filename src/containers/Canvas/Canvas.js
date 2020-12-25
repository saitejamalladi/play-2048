import React, {Component} from 'react';
import {Button} from '@material-ui/core';

class Canvas extends Component {
	boardWidth = 600;
	boardHeight = 600;

	state = {
		boxWidth: 50,
		boxHeight: 50,
		x: 0,
		y: 0
	}
	componentDidMount() {
		this.updateCanvas(10, 10);
	}

	updateCanvas = (newX, newY) => {
		let currentX = this.state.x;
		let currentY = this.state.y;
		if(newX < 0 || newX > this.boardWidth) newX = currentX;
		if(newY < 0 || newY > this.boardHeight) newY = currentY;

		const ctx = this.refs.canvas.getContext('2d');
		ctx.clearRect(currentX, currentY, this.state.boxWidth, this.state.boxHeight);
		this.setState({
			x: newX,
			y: newY
		})
		ctx.fillRect(newX, newY, this.state.boxWidth, this.state.boxHeight);
	}
	shift = (xStep, yStep) => {
		this.updateCanvas(this.state.x + xStep, this.state.y + yStep);
	}
	handleReset = () =>  {
		this.updateCanvas(this.boardWidth/2 - 5, this.boardHeight/2 - 5);
	}
	render () {
		return (
			<div>
				<div>
					x : {this.state.x}
					<br/>
					y : {this.state.y}
				</div>
				<div>
					<Button variant={"contained"} color={"secondary"} onClick={this.handleReset}>Reset</Button>
					<Button variant={"contained"} onClick={() => this.shift(-50,  0)}>Left</Button>
					<Button variant={"contained"} onClick={() => this.shift(+50,0)}>Right</Button>
					<Button variant={"contained"} onClick={() => this.shift(0, -50)}>Up</Button>
					<Button variant={"contained"} onClick={() => this.shift(0, +50)}>Down</Button>
					<br />
					<Button variant={"contained"} onClick={() => this.shift(-50, -50)}>Top Left</Button>
					<Button variant={"contained"} onClick={() => this.shift(+50, -50)}>Top Right</Button>
					<Button variant={"contained"} onClick={() => this.shift(-50, +50)}>Bottom Left</Button>
					<Button variant={"contained"} onClick={() => this.shift(+50, +50)}>Bottom Right</Button>
				</div>
				<div>
					<canvas ref="canvas" width={this.boardWidth} height={this.boardHeight}/>
				</div>
			</div>
		)
	}
}

export default Canvas;