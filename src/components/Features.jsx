
import FeatureCard from './FeatureCard'

function Features() {
  const features = [
    {tag: "Open Source",title: "Open source", description: "Read the code and use it in any project."},
    {tag: "Lightweight", title: "Lightweight", description: "Import only the components the page uses."},
    {tag: "Easy to Learn", title: "Easy to learn", description: "Every component takes a few plain props."}
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-20 py-12 text-center">
      <h2 className="text-4xl font-bold">Free</h2>
      <div className="flex gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.tag}
            tag={feature.tag}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Features
