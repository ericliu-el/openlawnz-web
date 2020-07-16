import React, { useState } from 'react'
import { PreviewErrorBoundary } from '.'
import { MicrositeContent } from '../../templates/microsite'

export default function MicrositesPreview(props) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  
  const { title, content } = props.entry.get("data").toJS()
  const wizardData = Object.values(props.fieldsMetaData.toJS().content?.modules.wizard.wizards || {})

  const handleSelect = (event) => {
    setCurrentSectionIndex(event.target.value)
  }

  return (
    <>
      <label htmlFor="select-section">Select section:&nbsp;</label>
      <select id="select-section" onChange={handleSelect} value={currentSectionIndex}>
        {content.map(({ title }, index) => <option value={index}>{title}</option>)}
      </select>
      <hr/>
      <PreviewErrorBoundary key={currentSectionIndex}>
        <MicrositeContent
          pageContext={{
            title: title,
            section: content[currentSectionIndex],
            section_headings: content.map(({ title }) => title || ''),
            wizardData: wizardData,
          }}
        />
      </PreviewErrorBoundary>
    </>
  )
}