# override entrypoint to run

import argparse
import time
import logging
import signal

logging.getLogger().setLevel(logging.INFO)

printer = logging.info


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "container_number", type=int, help="Container number", default=1, nargs="?"
    )
    parser.add_argument(
        "host", help="Host to listen on", default="localhost", nargs="?"
    )
    parser.add_argument(
        "port", type=int, help="Port to listen on", default=8080, nargs="?"
    )
    return parser.parse_args()


def handler(signum, frame):
    printer("Container is shutting down")
    exit(0)


if __name__ == "__main__":
    args = parse_args()

    signal.signal(signal.SIGTERM, handler)

    printer(f"Starting container {args.container_number} on {args.host}:{args.port}")

    while True:
        time.sleep(5)
        printer(f"Heartbeat: Container {args.container_number} is still running")
