import React from 'react'
import { Document, Page } from 'react-pdf';

export default function Resume() {
  return (
    <Document file="CFlynn_Resume2022.pdf">
      <Page pageNumber={1} />
    </Document>
  )
}
