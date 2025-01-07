import { Applicatiton } from '@/features/application'
import { ApplicationLayerProvider } from '@/features/applications'

export const App = () => {
  return (
    <ApplicationLayerProvider>
      <div className="w-screen h-screen relative">
        <div className="centered gap-6">
          <Applicatiton id="1" name="hello_world.exe">
            Hello world App Hello world App
          </Applicatiton>
          <Applicatiton id="2" name="contacts.exe">
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
    </ApplicationLayerProvider>
  )
}
