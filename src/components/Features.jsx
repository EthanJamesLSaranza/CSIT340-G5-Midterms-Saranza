import FeatureCard from './FeatureCard'

function Features() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-20 py-12 text-center">
      <h2 className="text-4xl font-bold">Free</h2>
      <div className="flex gap-6">
        <FeatureCard tag="Open Source" title="Open source" description="Read the code and use it in any project." />
        <FeatureCard tag="Lightweight" title="Lightweight" description="Import only the components the page uses." />
        <FeatureCard tag="Easy to Learn" title="Easy to learn" description="Every component takes a few plain props." />
      </div>
    </div>
  )
}

export default Features