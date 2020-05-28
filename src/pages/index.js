import React from 'react';

// const FpvtipsLogo = styled.a`
//   display: block;
//   width: 100%;
//   max-width: 420px;
//   margin: 0 auto;
// `

class Index extends React.Component {
	state = {
		loadVideo: true
	};

	componentDidMount() {
		// If user is on a dodgy connection, don't load the video at all
		if ('connection' in navigator) {
			if (navigator.connection.downlink < 5) {
				this.setState({ loadVideo: false });
			}
		}
	}

	render() {
		const { loadVideo } = this.state;

		return (
			<div>
				<div>
					<h4>
						<p>
							Organizations produce piles of documents, images and other information electronically. The
							location of this information is a time consuming task. Users tend to file papers and to save
							documents in folders on their own computers.Nobody knows what information is across the
							company and what information is needed.
						</p>
						<p>
							SSDMS is a web based document management application that uses standards and advanced
							technologies.SSDMS provides full document management capabilities including version control
							and file history, metadata, scanning, workflow, search, and The searching
							information/document “drama” more. It also allows the social activities around content to be
							used to connect people to other people, information to information, and people to
							information. SSDMS integrates all essential document management, collaboration and advanced
							search functionality into one easy to use solution. It provides a one-stop solution by
							managing both structured and unstructured information. SSDMS builds a highly valuable
							repository of corporate information assets to facilitate knowledge creation and improve
							business decision making. The result is improved productivity in the form of shared
							practices, greater cost efficiencies, better customer relations, faster sales cycles,
							shortened product time- to-market, and better decision-making.
						</p>
						Please let us know at:
						<a>info@silversolve.com </a>if you have any suggestions or bugs or feedback , We are happy to
						serve you better. 2018-2020 Silver Solve, All rights reserved.
					</h4>
				</div>
			</div>
		);
	}
}

export default Index;
