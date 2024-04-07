import argparse
import time
import logging

logging.getLogger().setLevel(logging.INFO)


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "-n",
        "container_number",
        type=int,
        help="Container number",
        default=1,
        nargs="?",
    )
    parser.add_argument(
        "-h", "host", help="Host to listen on", default="localhost", nargs="?"
    )
    parser.add_argument(
        "-p", "port", type=int, help="Port to listen on", default=8080, nargs="?"
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()

    logging.info(
        f"Starting container{args.container_number} on {args.host}:{args.port}"
    )

    while True:
        time.sleep(10)
        logging.info(f"Heartbeat: container{args.container_number} is still running")
