import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Head>
        <title>Arhaam Hossain</title>
        <meta name="description" content="Electrical Engineering Portfolio" />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-24">
          <h1 className="text-4xl font-bold">Arhaam Hossain</h1>
          <p className="text-lg text-gray-600 mt-2">Electrical Engineer | Hardware & Robotics</p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/arhaamhossain" className="underline text-blue-600">GitHub</a>
            <a href="www.linkedin.com/in/arhaam-hossain" className="underline text-blue-600">LinkedIn</a>
            <a href="arhaamhossain2004@gmail.com" className="underline text-blue-600">Email</a>
          </div>
        </header>

        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="space-y-12">
            <div className="group">
              <h3 className="text-xl font-medium">Custom PCB Motor Controller</h3>
              <p className="text-gray-700 mt-2">Designed and fabricated a dual-motor controller board with current sensing and thermal protection. Used STM32, KiCad, and buck-boost topology for motor power stage.</p>
              <a href="https://github.com/yourusername/motor-pcb" className="text-blue-600 underline mt-2 inline-block">GitHub</a>
            </div>

            <div className="group">
              <h3 className="text-xl font-medium">Autonomous Line Follower</h3>
              <p className="text-gray-700 mt-2">Built a fast-response robot using IR sensors and PID control logic. Implemented in C on an Atmega328P with hand-tuned motor PWM response curves.</p>
              <a href="https://github.com/yourusername/line-follower" className="text-blue-600 underline mt-2 inline-block">GitHub</a>
            </div>

            <div className="group">
              <h3 className="text-xl font-medium">FPGA-based CPU Design</h3>
              <p className="text-gray-700 mt-2">Designed a 4-stage pipelined RISC processor in Verilog with basic ALU, branch prediction, and simulated instruction memory. Deployed on a DE10-Lite board.</p>
              <a href="https://github.com/yourusername/fpga-cpu" className="text-blue-600 underline mt-2 inline-block">GitHub</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm an Electrical Engineering student focused on building practical, high-performance hardware systems. My interests include robotics, embedded systems, and low-level electronics. I thrive at the intersection of schematics, firmware, and functionality.
          </p>
        </section>
      </main>
    </div>
  );
}
