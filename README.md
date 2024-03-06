# reanimated-react-tnative

Reanimated is a React Native library that empowers developers to create smooth and performant animations by leveraging the power of the device's native capabilities. Unlike traditional animation approaches that rely solely on JavaScript, Reanimated performs animation calculations directly on the native side, freeing up the main JavaScript thread and ensuring smoother, more responsive user interfaces. This native execution allows for complex animations, gestures, and interactions to be handled efficiently, resulting in apps with fluid motion and improved user experience. Additionally, Reanimated seamlessly integrates with React Native components and provides a declarative API, making it easier for developers to express animation logic and create visually engaging experiences without sacrificing performance.

### useSharedValue

- useSharedValue is a hook used to create shared values that can be animated and accessed across different parts of your application. Shared values are special variables that are stored and managed natively, rather than in JavaScript memory, which enhances performance by offloading animation calculations to the native side.
