import React, {Component} from 'react';
import {Layer, Rect, Stage} from 'react-konva';
import classes from './Canvas.module.css';

const Konva= window.Konva;

class Canvas extends Component {
	constructor(...args) {
		super(...args);
		this.state = {
			innerRadius: 50,
			outerRadius: 150,
		};
	}

	handleClick = () => {
		this.setState({
			color: Konva.Util.getRandomColor()
		});
	}

	render () {
		return (
			<div className={classes.Canvas}>
			<Stage width={350} height={350}>
				<Layer>
					<Rect
						x={0}
						y={0}
						width={350}
						height={350}
						fill={"#b9ada1"}
						onDragEnd={() =>
							this.handleClick
						}
					/>
					{Array.from(Array(4).keys()).map((row, rowIndex) => {
						return Array.from(Array(4).keys()).map((col, colIndex) => {
							return (
							<Rect
									key={rowIndex + " " + colIndex}
									x={10 * (colIndex+1) + 75 * (colIndex)}
									y={10 * (rowIndex+1) + 75 * (rowIndex)}
									width={75}
									height={75}
									fill={"#ebe0cb"}
									onDragEnd={() =>
										this.handleClick
									}
								/>
							)
						}
					)})
					}
				</Layer>
			</Stage>
			</div>
		)
	}
}

export default Canvas;