import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Post = () => {
	return (
		<div>
			<Form>
				<FormGroup>
					<Label for="posttitle">Post Title</Label>
					<Input
						type="text"
						name="posttitle"
						id="posttitle"
						placeholder="Title of Post"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="blogtext"></Label>
					<Input
						type="textarea"
						style={{ height: 700 }}
						name="blog"
						id="blogtext"
					/>
				</FormGroup>
				<Button>Post</Button>
			</Form>
		</div>
	);
};

export default Post;
