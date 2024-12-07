import { Applicatiton } from '@/features/application'

export const App = () => {
  return (
    <div className="w-screen h-screen relative">
      {/* <div className="absolute-full bg-sky-100">background</div> */}

      <div className="centered gap-6">
        <Applicatiton name="hello_world.exe">Hello world App</Applicatiton>
        <Applicatiton name="contacts.exe">
          <ul>
            <li>contact1</li>
            <li>contact2</li>
            <li>contact3</li>
            <li>contact4</li>
            <li>contact5</li>
          </ul>
        </Applicatiton>
      </div>
    </div>
  )
}
