// TestCaseTab.tsx - Test case tab content

import React from 'react'
import type { MockChallenge } from './challengesData'

interface TestCaseTabProps {
  challenge: MockChallenge
}

const TestCaseTab: React.FC<TestCaseTabProps> = ({ challenge }) => {
  return (
    <div className="tab-content-area">
      <h3 className="section-title">Test Cases</h3>
      <p className="test-case-description">
        A test case consists of input values to the program and the expected output. 
        Input will be fed to the program's STDIN and output will be expected in STDOUT.
      </p>

      {/* Test Cases List */}
      <div className="test-cases-list">
        {challenge.testCases.map((testCase, index) => (
          <div key={testCase.id} className="test-case-card">
            <h4 className="test-case-title">Test Case {index + 1}</h4>
            
            <div className="test-case-field">
              <label className="field-label">Input:</label>
              <pre className="field-value">{testCase.input}</pre>
            </div>
            
            <div className="test-case-field">
              <label className="field-label">Expected Output:</label>
              <pre className="field-value">{testCase.expectedOutput}</pre>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="btn btn-primary">Add Test Case</button>
        <button className="btn btn-secondary">Export</button>
      </div>
    </div>
  )
}

export default TestCaseTab
