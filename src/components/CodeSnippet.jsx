/* CodeSnippet.jsx */

import { useEffect, useState } from 'react'
import { faCheck, faCopy, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Prism from 'prismjs'
import { Trans } from 'react-i18next'
import useScreenProps from '../hooks/useScreenProps'
import Button from './Button'
import Tooltip from './Tooltip'

function CodeSnippet({ snippet: { codeString, extension, language, title } }) {
  // Syntax highlighted code snippet box for example purposes

  const [isCopied, setIsCopied] = useState(false)
  const { screenSize } = useScreenProps()

  useEffect(() => {
    // Calls the Prism.js highlight functionality

    if (typeof window !== 'undefined') Prism.highlightAll()
  }, [])

  function onClickHandler() {
    // Copies the snippet to the clipboard

    navigator.clipboard.writeText(codeString)

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return (
    <div
      className="relative m-auto my-12 w-full md:w-5/6 xl:w-9/12 bg-slate-150
      dark:bg-dark-4 rounded-lg shadow-md transition-[background-color]
      overflow-hidden duration-300"
    >
      <div className="mx-5 h-10 2xl:h-12 flex justify-between items-center font-semibold">
        <p className="2xl:text-lg">
          <Trans>{title}</Trans>
        </p>
        <div className="flex gap-4">
          {isCopied ? (
            <p className="flex items-center gap-2 2xl:text-lg">
              <Trans>misc.codeSnippet.copied</Trans>
              <FontAwesomeIcon icon={faCheck} />
            </p>
          ) : (
            <Button
              className="relative flex items-center text-lg 2xl:text-xl"
              onClick={onClickHandler}
            >
              <FontAwesomeIcon icon={faCopy} />
              <Tooltip position="top-0 right-0 translate-y-10 2xl:translate-y-12">
                <Trans>misc.codeSnippet.copyTooltip</Trans>
              </Tooltip>
            </Button>
          )}
          {!screenSize.md && (
            <Button className="relative flex items-center text-lg 2xl:text-xl">
              <FontAwesomeIcon icon={faInfoCircle} />
              <Tooltip position="top-0 right-0 translate-y-10 2xl:translate-y-12">
                <Trans>misc.codeSnippet.infoTooltip</Trans>
              </Tooltip>
            </Button>
          )}
        </div>
      </div>
      <p
        className="absolute right-0 px-5 py-4 font-bold 2xl:text-lg text-slate-500
        dark:text-gray-400 select-none duration-300"
      >
        {extension.toUpperCase()}
      </p>
      <pre
        className="p-5 bg-white dark:bg-dark-6 text-xs md:text-sm 2xl:text-base
        transition-[background-color] duration-300"
        tabIndex="-1"
      >
        <code className={`language-${language}`}>{codeString}</code>
      </pre>
    </div>
  )
}

export default CodeSnippet
