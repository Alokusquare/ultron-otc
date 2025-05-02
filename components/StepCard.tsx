import { motion } from "framer-motion"

interface StepCardProps {
  number: number
  title: string
  description: string
}

/**
 * StepCard component displays a numbered step in the how-it-works section
 * @param {StepCardProps} props - Component props
 * @returns JSX.Element
 */
export const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1a2e4c] text-green-400 text-xl font-bold mb-6">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-center text-gray-400">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-black-400 text-center"
        >
          {description}
        </motion.span>
      </p>
    </div>
  )
} 