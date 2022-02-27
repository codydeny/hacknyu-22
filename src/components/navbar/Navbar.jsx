<Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
    </Step>
  ))}
</Stepper>