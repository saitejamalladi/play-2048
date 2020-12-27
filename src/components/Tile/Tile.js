import React, {Component} from "react";
import classes from "./Tile.module.css";
import Zoom from '@material-ui/core/Zoom';

class Tile extends Component {
	getClassName = (content) => {
		let clxList = [];
		clxList.push(classes.GridCell);
		clxList.push(classes[`Cell-${content}`]);
		return clxList.join(" ");
	}

	render() {
		let content = this.props.children;
		let className = this.getClassName(content);
		return (
			<Zoom in={true}>
				<div
					className={className}>
					{content ? content : ''}
				</div>
			</Zoom>
		);
	}
}

export default Tile;