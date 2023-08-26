/* SubmissionMessage.jsx */

import { Trans } from 'react-i18next'

function SubmissionMessage({ message: { active, status } }) {
  // Feedback message displayed when user clicks the 'submit' button of the form

  let textColor

  switch (status) {
    case 'error':
      textColor = 'text-orange-600 dark:text-orange-500'
      break

    case 'incomplete':
      textColor = 'text-rose-600 dark:text-rose-400'
      break

    case 'success':
      textColor = 'text-green-600 dark:text-green-500'
      break

    default:
      textColor = 'text-rose-600 dark:text-rose-400'
  }

  return (
    <p
      className={`absolute 2xl:text-lg font-semibold text-center transition-all
      duration-300 ease-in-out
      ${textColor}
      ${active ? 'opacity-1 visible' : 'opacity-0 invisible'}
      ${
        status === 'error'
          ? '-bottom-[4.5rem] 2xl:-bottom-20'
          : '-bottom-12 2xl:-bottom-14'
      }`}
    >
      <Trans>pages.home.contact.message.{status}</Trans>
    </p>
  )
}

export default SubmissionMessage
