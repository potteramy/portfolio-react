import React from 'react'
import { Container, Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


const Resume = () => {
    const docs = [{ uri: require("../Resume.pdf") }];
    return (
      <div className="App-body">
        <div className="App-resume">
          <h1>Resume</h1>
        <Container>
            <Row>
                <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
            </Row>
        </Container>
        </div>
        </div>
    )
}
export default Resume
